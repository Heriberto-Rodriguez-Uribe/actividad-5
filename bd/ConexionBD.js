class ConectarBD{
    constructor(){
        this.conexion=null;
        this.mysql=require("mysql2/promise");
    }
    async conectarMySql(){
        try {
            this.conexion=await this.mysql.createConnection({
                host:'127.0.0.1',
                user:'root',
                
                database:'tiendaut',
                port:'3306'
            });
            console.log("conexion q mysql creada");
        } catch (error) {
            console.error("Error al crear la conexion "+error);
        }
    }
    async cerrarConexion(){
        if(this.conexion!=null){
            try {
                await this.conexion.end();
                console.log("Conexion de mysqsl cerrada");
            } catch (error) {
                console.error("Error al crear conexion "+error);
            }
        }
    }
}

module.exports=ConectarBD;