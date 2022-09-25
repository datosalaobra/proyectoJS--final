let pagina = 1;
const btnAnterior = document.getElementById('btnAnterior');
const btnSiguiente = document.getElementById('btnSiguiente');

btnSiguiente.addEventListener('click', () => {
	if(pagina < 1000){
		pagina += 1;
		cargarPeliculas();
	}
});

btnAnterior.addEventListener('click', () => {
	if(pagina > 1){
		pagina -= 1;
		cargarPeliculas();
	}
});

const cargarPeliculas = async() => {
	try {
		const respuesta = await fetch(`https://api.themoviedb.org/3/movie/popular?api_key=487c850944a4c1025fd2caf96cf0a548&language=es-AR&page=${pagina}`);
	
		console.log(respuesta);

		// Si la respuesta es correcta
		if(respuesta.status === 200){
			const datos = await respuesta.json();
			
			let peliculas = '';
			datos.results.forEach(pelicula => {
				peliculas += `
					<div class="pelicula">
						<div class="card mb-3" style="max-width: 540px;">
							<div class="row g-0">
							<h2 class="calificacion">${pelicula.vote_average}</h2>
								<div class="col-md-4">
									<img class="poster" src="https://image.tmdb.org/t/p/w500/${pelicula.poster_path}">
								</div>
									<div class="col-md-8">
										<div class="card-body">
											<h1 class="titulo">${pelicula.title}</h1>
											<div class="overview">
											<p class="card-fecha"><small class="text-muted">Fecha de estreno: ${pelicula.release_date}.</small></p>
											<p class="card-text">Sinopsis: ${pelicula.overview}</p>
											<img class="poster-end" src="https://image.tmdb.org/t/p/w500/${pelicula.backdrop_path}">
											</div>
										</div>
								</div>
							</div>
				    	</div>
					</div>
				`;
			});

			document.getElementById('contenedor').innerHTML = peliculas;

		} else if(respuesta.status === 401){
			console.log('Error de autentificación');
		} else if(respuesta.status === 404){
			console.log('La pelicula que buscas no existe');
		} else {
			console.log('Hubo un error y no sabemos que paso');
		}

	} catch(error){
		console.log(error);
	}

}

cargarPeliculas();