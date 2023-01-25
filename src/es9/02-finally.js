const promesa = () => {
    return new Promise((resolve, reject) => {
      if (false) {
        //true o false
        resolve("Se ha resuelto la promesa")
      } else {
        reject("Se ha rechazado la promesa")
      }
    })
  }
  
  promesa()
    .then(respuesta => console.log(respuesta)) //En caso que se ejecute resolve
    .catch(error => console.log(error))
    .finally(() => console.log('Finaly')); //En caso que se ejecute reject
