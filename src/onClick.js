export const onClick = (e) => {
  var el = document.getElementById("results");

  var numFruitFlies = document.getElementById("num-fruit-flies").value;      
  var numIterations = document.getElementById("num-iterations").value;      
  var numTrials = document.getElementById("num-trials").value;      
  var searchSpaceLowerBound = document.getElementById("lower-bound").value;      
  var searchSpaceUpperBound = document.getElementById("upper-bound").value;      
  var chaoticMapType = document.getElementById("chaotic-map-type").value;      
  var chaoticMapDimension = document.getElementById("chaotic-map-dimension").value;

  var trialResults = foa.trial(
    numFruitFlies,
    numIterations,
    numTrials,
    searchSpaceLowerBound,
    searchSpaceUpperBound,
    chaoticMapType,
    chaoticMapDimension
  );

  foa.printCsvResultsPerTrial(
    trialResults,
    el,
    numIterations
  );
};
