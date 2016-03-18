var map = {};

function phi(event, phi){
  map[event] = phi;
}

phi("pizza", .08);
phi("cat", -0.07);

console.log(map);

for (var event in map){
  console.log("The correlation for '" + event +"' is " + map[event]);
}

function gatherCorrelations(journal) {
  var phis = {};
  for (var entry = 0; entry < journal.length; entry++) {
    var events = journal[entry].events;
    for (var i = 0; i < events.length; i++) {
      var event = events[i];
      if (!(event in phis))
        phis[event] = phi(tableFor(event, journal));
    }
  }
  return phis;
}

