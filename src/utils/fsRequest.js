export default function buildJson(eventProperties) {
  const subStrings = {
    string: 'str',
    integer: 'int',
    boolean: 'bool'
  };

  const properties = {};

  for (let i = 0; i < eventProperties.length; i++) {
    let prop = eventProperties[i];
    let propKey = `${prop.propertyName}_${subStrings[prop.propertyType]}`;
    properties[propKey] = prop.propertyValue;
  }
  let propJson = JSON.stringify(properties);
  return propJson;
}
