// PERFIL: PROGRAMADOR FRONT | DISEÑADOR
// HINT: Programador (HTML | DOM)
// * Maquetar componentes
// * Especificar atributos y nombres de clases
// * Enlazar datos del componente a la vista
<template>
  <div class="container">
    <div class="form-input">
      <div class="input-label">
        <label>Email: {{ username }}</label>
      </div>
      <div class="input-control">
        <input 
          type="email"
          placeholder="Type your email"
          v-bind:value="username"
          v-on:change="updateUsername($event)">
      </div>
    </div>
    <div class="form-input">
      <div class="input-label">
        <label>Password: {{ password }}</label>
      </div>
      <div class="input-control">
        <input 
          type="password"
          placeholder="Type your password">
      </div>
    </div>
    <div class="checkbox-control">
      <input type="checkbox"><span>Remember</span>
    </div>
    <div class="button-control">
      <button>Sign In</button>
    </div>
  </div>
</template>

// PERFIL: PROGRAMADOR
// HINT: Programador Vue (Control de Datos | Eventos | Enlace | Propiedades | Vuex)
<script>
export default {
  // data() -> Devuelve el estado inicial del componente
  data() {
    return {
      username: 'john',
      password: 'doe'
    }
  },
  methods: {
    updateUsername(event) {
      this.username = event.target.value
    }
  }
}
</script>

// PERFIL: DISEÑADOR | PROGRAMADOR FRONT
// HINT: Diseñador (CSS | Flexbox | Grids | Animaciones | ...)
// * Estilizar la maquetación
// * Definir Efectos Visuales
<style scope>
.container {
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 250px;
  border: 1px solid gainsboro;
  padding: 32px;
}

.form-input {
  padding: 8px;
}

.form-input input {
  width: 100%;
}

.input-label {
  color: cornflowerblue;
  padding: 8px 0px;
}

.checkbox-control {
  padding: 8px;
}

.button-control {
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  padding: 8px;
}
</style>