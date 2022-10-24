
export class SuperLogger {

    getTimeNow() {
      return new Date().toISOString();
    }
    log(msj,data) {
    
      throw new Error("log methodu implemente edilmeli.");
     
    }
  }


export class userLogger extends SuperLogger {
    log(msj, data) {
      console.log(`${this.getTimeNow()} userLogger:`, msj, data);
    }
  }
  export class courseLogger extends SuperLogger {
    log(msj, data) {
      console.log(`${this.getTimeNow()} courseLogger:`, msj, data);
    }
  }
