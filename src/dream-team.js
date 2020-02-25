module.exports = function createDreamTeam(members) {
  if (!Array.isArray(members)) return false
  let memArr = members.filter(i => typeof i === 'string')
  return memArr.map(i => i.toUpperCase().match(/[a-z]{1}/i)).sort().join('')
};