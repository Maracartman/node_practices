var Schema = require('../providers/database.connection.provider').scheme;
var mongoose = require('../providers/database.connection.provider').mongoose;

var posibles_valores = ["M","F"];

var email_match = [/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,"Coloca un email válido"];

var userSchemaJson = {
    username:{type:String,required:true,maxlength:[50,"El nombre de usuario no puede " +
    "sobrepasar de 50 caracteres"]},
    email:{type:String,required:"El correo es obligatorio",
    match: email_match},
    age: {type:Number,min:[4,"La edad no puede ser menor a 4"],max:[100,"La edad no puede " +
    "ser mayor a 100"]},
    password:{type:String,minlength: [5,"El password es muy corto"],
    validate: {
        validator: function (p) {
            return this.password_confirmation == p;
        },
        message: "Las contraseñas no son iguales"
    }},
    sexo: {type:String,enum:{values:posibles_valores,message: "Opciòn no vàlida"}}
}

var user_schema = new Schema(userSchemaJson);

user_schema.virtual("password_confirmation").get(function () {
   return this.p_c;
}).set(function (password) {
    this.p_c = password;
});

var User = mongoose.model("User",user_schema);

module.exports = User;