export * as account from './account'
export * as projects from './projects'
export * as files from './files'
export function getProjectFromData(data) {
  const { project, projectName} = data
  let modelData
  if(!projectName && (!project || !project.name)){
    console.error('Project or projectName is required.')
    return null
  }
  if(project){
    modelData = project
  } else {
    modelData.name = projectName
  }
  return modelData
}
