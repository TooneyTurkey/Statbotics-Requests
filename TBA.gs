// Begin Base Scripts
/**
 * Handles the HTTPS request for Statbotics requests. Takes the path, such as team/frc1234/simple, and returns the resulting JSON object. Uses the key set in StatboticsSetKey().
 * 
 * @param {text} path The part of the URL after "/api/v3/" in the query.
 * @return The body result of the query.
 * @customfunction
 */
function StatboticsQuery(path) {
  var url = 'https://api.statbotics.io/v2/'+path
  var result = UrlFetchApp.fetch(url)
  return result.getContentText()
}
// End Base Scripts

function StatboticsCustom(query, nav) {
  var json
  try {
  json = JSON.parse(StatboticsQuery(query))
  } catch (err) {return ("There was an error retrieving the JSON.")}
  try {
  var args = Array.prototype.slice.call(arguments, 1);
  for (var a in args) {
    json = json[args[a]]
  }
  return JSON.stringify(json)
  } catch (err) {return ("There was an error parsing the JSON.")}
}

//End Custom Scripts
