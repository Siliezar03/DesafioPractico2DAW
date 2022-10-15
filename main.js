const contenedor = document.getElementById("contenedor");

const obtenerCartelera = async () => {
  const data = await fetch("./data/movies.json").then((response) =>
    response.json()
  );
  return data;
};

const mostrarCartelera = async () => {
  const cartelera = await obtenerCartelera();
  let html = "";

  cartelera.forEach((pelicula) => {
    html += `
    <div class="card m-3" style="max-width: 900px;">
      <div class="row g-0">
        <div class="col-md-4">
          <img src="${pelicula.imagen}"
            class="img-fluid rounded-start" alt="${pelicula.nombre}">
        </div>
        <div class="col-md-8">
          <div class="card-body">
            <h4 class="card-title mb-3"><b>${pelicula.nombre}</b></h4>
            <div class="row">
              <hr>
              <div class="col-md-6">
                <p><b>Clasificación: </b><span class="badge bg-success">(${pelicula.clasificacion.join(
                  ", "
                )})</span></p>
              </div>
              <div class="col-md-6">
                <p><b>Duración: </b><span class="badge bg-danger">${
                  pelicula.duracion
                }</span></p>
              </div>
              <div class="col-md-6">
                <p><b>Formato Película: </b><span class="badge bg-primary">(${pelicula.formato.join(
                  ", "
                )})</span></p>
              </div>
              <div class="col-md-6">
                <p><b>Butacas: </b><span class="badge bg-warning text-black">${
                  pelicula.t_butacas
                }</span></p>
              </div>
              <hr>
            </div>
            <h4 class="card-text">
              <b>Horarios:</b>
            </h4>
            <div class="row d-flex justify-content-center">`;
    pelicula.horarios.forEach((horario) => {
      html += `
              <div class="col-md-2 m-1">
                <h5><span class="badge bg-info">${horario}</span></h5>
              </div>`;
    });
    html += `
            </div>
          </div>
        </div>
      </div>
    </div>`;
  });

  contenedor.innerHTML = html;
};

document.addEventListener("DOMContentLoaded", mostrarCartelera);
