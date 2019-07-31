const Hutang = require("../models/hutang");

exports.getAbout = (req, res, next) => {
  res.render("about", {
    path: "/about",
    title: "about"
  });
};

exports.getIndex = (req, res, next) => {
  Hutang.find()
    .then(hutangs => {
      res.render("index", {
        hut: hutangs,
        pageTitle: "Index",
        path: "/",
        title: "index"
      });
    })
    .catch(err => console.log(err));
};

exports.getAddHutang = (req, res, next) => {
  res.render("add", {
    pageTitle: "Add Hutang",
    path: "/add",
    title: "add",
    editing: false
  });
};

exports.postAddHutang = (req, res, next) => {
  const nama = req.body.nama;
  const total = req.body.total;
  const hutang = new Hutang({
    nama: nama,
    total: total
  });
  hutang
    .save()
    .then(result => {
      console.log("Created User");
      res.redirect("/");
    })
    .catch(err => {
      console.log(err);
    });
};

exports.getEditHutang = (req, res, next) => {
  const editMode = req.query.edit;
  if (!editMode) {
    return res.redirect("/");
  }
  const hutId = req.params.hutangId;
  Hutang.findById(hutId)
    .then(hutang => {
      if (!hutang) {
        return res.redirect("/");
      }
      res.render("edit", {
        pageTitle: "Edit",
        path: "/edit",
        editing: editMode,
        hutang: hutang,
        title: "edit"
      });
    })
    .catch(err => console.log(err));
};

exports.postEditHutang = (req, res, next) => {
  const hutangId = req.body.hutangId;
  const updatedNama = req.body.nama;
  const updatedTotal = req.body.total;

  Hutang.findById(hutangId)
    .then(hutang => {
      hutang.nama = updatedNama;
      hutang.total = updatedTotal;
      return hutang.save();
    })
    .then(result => {
      console.log("UPDATED");
      res.redirect("/");
    })
    .catch(err => console.log(err));
};

exports.postDeleteHutang = (req, res, next) => {
  const hutId = req.body.hutangId;
  Hutang.findByIdAndRemove(hutId)
    .then(() => {
      console.log("Delete Succesfull");
      res.redirect("/");
    })
    .catch(err => console.log(err));
};
