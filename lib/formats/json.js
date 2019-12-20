const Immutable = require("immutable-ext");

module.exports = def =>{
  console.log(
    def
      .get("props")
      .reduce(
        (a, b, c) => a.set(b.get("name"), b.get("value")),
        Immutable.OrderedMap()
      ).toJS(),
    null,
    2
  )
  return JSON.stringify(
    def
      .get("props")
      .reduce(
        (a, b, c) => a.set(b.get("name"), b.get("value")),
        Immutable.OrderedMap()
      ),
    null,
    2
  ).replace(/([{:,]\s?)\\"/g,'$1"').replace(/\\"(\s?[,:}])/g,'"$1').replace(/"{/g, '{').replace(/}"/g, '}');
      }
