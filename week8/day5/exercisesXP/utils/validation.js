// validations 

const validateTask = task => {
    return task && task.title && typeof task.title === 'string';
  };
  
  const validateTaskUpdate = task => {
    return task && (task.title === undefined || typeof task.title === 'string');
  };
  
  // export 
  module.exports = { validateTask, validateTaskUpdate };
  