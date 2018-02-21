import { timesOfDay, groups, categories } from './criteria';

function checkAttribute(a, b) {
  return (
    b === '*' ? true
      :
      a === b)
}

export function filterFunc(element, time, category, group) {
  if (checkAttribute(element.category, categories[category].value) &&
    checkAttribute(element.timeOfDay, timesOfDay[time].value) &&
    checkAttribute(element.groupActivity, groups[group].value))
    return true;
  return false
}