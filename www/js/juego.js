var app = {
  inicio: function() {
    DIAMETRO_PacMan = 32;
    dificultad = 0;
    velocidadX = 0;
    velocidadY = 0;
    puntuacion = 0;
    tiempomuerto = 0;

    alto = document.documentElement.clientHeight;
    ancho = document.documentElement.clientWidth;

    app.vigilaSensores();
    app.iniciaJuego();
  },

  iniciaJuego: function() {

    function preload() {
      game.physics.startSystem(Phaser.Physics.ARCADE);

      game.stage.backgroundColor = '#000000';
      game.load.image('PacMan', 'assets/PacMan32.png');

      game.load.image('Fantasma1', 'assets/Fantasma1.png')
      game.load.image('Fantasma2', 'assets/Fantasma2.png')
      game.load.image('Fantasma3', 'assets/Fantasma3.png')
      game.load.image('Fantasma4', 'assets/Fantasma4.png')

      game.load.image('Pastilla1', 'assets/Pastilla.png')
      game.load.image('Pastilla2', 'assets/Pastilla.png')
      game.load.image('Pastilla3', 'assets/Pastilla.png')
      game.load.image('Pastilla4', 'assets/Pastilla.png')
      game.load.image('Pastilla5', 'assets/Pastilla.png')
      game.load.image('Pastilla6', 'assets/Pastilla.png')
      game.load.image('Pastilla7', 'assets/Pastilla.png')
      game.load.image('Pastilla8', 'assets/Pastilla.png')
      game.load.image('Pastilla9', 'assets/Pastilla.png')
      game.load.image('Pastilla10', 'assets/Pastilla.png')      
    }

    function create() {
      scoreText = game.add.text(0, 16, puntuacion, { fontSize: '15px', fill: '#ffffff' });

      Fantasma1 = game.add.sprite(app.inicioX(), app.inicioY(), 'Fantasma1');
      Fantasma2 = game.add.sprite(app.inicioX(), app.inicioY(), 'Fantasma2');
      Fantasma3 = game.add.sprite(app.inicioX(), app.inicioY(), 'Fantasma3');
      Fantasma4 = game.add.sprite(app.inicioX(), app.inicioY(), 'Fantasma4');            

      Pastilla1 = game.add.sprite(app.inicioX(), app.inicioY(), 'Pastilla1');
      Pastilla2 = game.add.sprite(app.inicioX(), app.inicioY(), 'Pastilla2'); 
      Pastilla3 = game.add.sprite(app.inicioX(), app.inicioY(), 'Pastilla3'); 
      Pastilla4 = game.add.sprite(app.inicioX(), app.inicioY(), 'Pastilla4'); 
      Pastilla5 = game.add.sprite(app.inicioX(), app.inicioY(), 'Pastilla5'); 
      Pastilla6 = game.add.sprite(app.inicioX(), app.inicioY(), 'Pastilla6'); 
      Pastilla7 = game.add.sprite(app.inicioX(), app.inicioY(), 'Pastilla7'); 
      Pastilla8 = game.add.sprite(app.inicioX(), app.inicioY(), 'Pastilla8'); 
      Pastilla9 = game.add.sprite(app.inicioX(), app.inicioY(), 'Pastilla9'); 
      Pastilla10 = game.add.sprite(app.inicioX(), app.inicioY(), 'Pastilla10');  

      PacMan = game.add.sprite(app.inicioX(), app.inicioY(), 'PacMan');

      game.physics.arcade.enable(PacMan);
      game.physics.arcade.enable(Fantasma1);
      game.physics.arcade.enable(Fantasma2);
      game.physics.arcade.enable(Fantasma3);
      game.physics.arcade.enable(Fantasma4);

      game.physics.arcade.enable(Pastilla1);
      game.physics.arcade.enable(Pastilla2);
      game.physics.arcade.enable(Pastilla3);
      game.physics.arcade.enable(Pastilla4);
      game.physics.arcade.enable(Pastilla5);      
      game.physics.arcade.enable(Pastilla6);      
      game.physics.arcade.enable(Pastilla7);      
      game.physics.arcade.enable(Pastilla8);      
      game.physics.arcade.enable(Pastilla9);      
      game.physics.arcade.enable(Pastilla10);      

      PacMan.body.collideWorldBounds = true;
      PacMan.body.onWorldBounds = new Phaser.Signal();
      PacMan.body.onWorldBounds.add(app.decrementaPuntuacion, this);   
    }

    function update() {
      var factorDificultad = (300 + (dificultad * 100));
      PacMan.body.velocity.y = (velocidadY * factorDificultad);
      PacMan.body.velocity.x = (velocidadX * (-1 * factorDificultad));

      game.physics.arcade.overlap(PacMan, Fantasma1, app.decrementaPuntuacion2, null, this);
      game.physics.arcade.overlap(PacMan, Fantasma2, app.decrementaPuntuacion2, null, this);
      game.physics.arcade.overlap(PacMan, Fantasma3, app.decrementaPuntuacion2, null, this);
      game.physics.arcade.overlap(PacMan, Fantasma4, app.decrementaPuntuacion2, null, this);

			game.physics.arcade.overlap(PacMan, Pastilla1, app.incrementaPuntuacion, null, this);
			game.physics.arcade.overlap(PacMan, Pastilla2, app.incrementaPuntuacion, null, this);
			game.physics.arcade.overlap(PacMan, Pastilla3, app.incrementaPuntuacion, null, this);
			game.physics.arcade.overlap(PacMan, Pastilla4, app.incrementaPuntuacion, null, this);
			game.physics.arcade.overlap(PacMan, Pastilla5, app.incrementaPuntuacion, null, this);
			game.physics.arcade.overlap(PacMan, Pastilla6, app.incrementaPuntuacion, null, this);
			game.physics.arcade.overlap(PacMan, Pastilla7, app.incrementaPuntuacion, null, this);
			game.physics.arcade.overlap(PacMan, Pastilla8, app.incrementaPuntuacion, null, this);
			game.physics.arcade.overlap(PacMan, Pastilla9, app.incrementaPuntuacion, null, this);
			game.physics.arcade.overlap(PacMan, Pastilla10, app.incrementaPuntuacion, null, this);

    }

    var estados = { preload: preload, create: create, update: update };
    var game = new Phaser.Game(ancho, alto, Phaser.CANVAS, 'phaser',estados);
  },

//toca los bordes
  decrementaPuntuacion: function() {

    tiempomuerto = tiempomuerto + 1
    if (tiempomuerto > 50) {
 
        puntuacion = puntuacion - 3;
        tiempomuerto = 0;

    Fantasma1.body.x = app.inicioX();
    Fantasma1.body.y = app.inicioY();

    Fantasma2.body.x = app.inicioX();
    Fantasma2.body.y = app.inicioY();

    Fantasma3.body.x = app.inicioX();
    Fantasma3.body.y = app.inicioY();

    Fantasma4.body.x = app.inicioX();
    Fantasma4.body.y = app.inicioY(); 

    PacMan.body.x = app.inicioX();
    PacMan.body.y = app.inicioY();


    }    
  
    scoreText.text = puntuacion;
    
   
    
  },

// toca un fantasma
  decrementaPuntuacion2: function() {
    puntuacion = puntuacion - 3;
    scoreText.text = puntuacion;
    PacMan.body.x = app.inicioX();
    PacMan.body.y = app.inicioY();    
    } ,

//toca una pastilla
  incrementaPuntuacion: function() {
    puntuacion = puntuacion + 1;
    scoreText.text = puntuacion;
    PacMan.body.x = app.inicioX();
    PacMan.body.y = app.inicioY();

    Fantasma1.body.x = app.inicioX();
    Fantasma1.body.x = app.inicioY();
    Fantasma2.body.x = app.inicioX();
    Fantasma2.body.x = app.inicioY();
    Fantasma3.body.x = app.inicioX();
    Fantasma3.body.x = app.inicioY();
    Fantasma4.body.x = app.inicioX();
    Fantasma4.body.x = app.inicioY();
  },

  inicioX: function() {
    return app.numeroAleatorioHasta(ancho - DIAMETRO_PacMan);
  },

  inicioY: function() {
    return app.numeroAleatorioHasta(alto - DIAMETRO_PacMan);
  },

  numeroAleatorioHasta: function(limite) {
    return Math.floor(Math.random() * limite);
  },

  vigilaSensores: function() {
    function onError() {
      console.log('onError!');
    }
    function onSuccess(datosAceleracion) {
      app.detectaAgitacion(datosAceleracion);
      app.registraDireccion(datosAceleracion);
    }
    navigator.accelerometer.watchAcceleration(onSuccess, onError, {
      frequency: 5
    });
  },

  detectaAgitacion: function(datosAceleracion) {
    agitacionX = datosAceleracion.x > 10;
    agitacionY = datosAceleracion.y > 10;
    if (agitacionX || agitacionY) {
      setTimeout(app.recomienza, 1000);
    }
  },







  recomienza: function() {
    document.location.reload(true);
  },

  registraDireccion: function(datosAceleracion) {
    velocidadX = datosAceleracion.x;
    velocidadY = datosAceleracion.y;
  }
};

if ('addEventListener'in document) {
  document.addEventListener('deviceready', function() {
    app.inicio();
  }, false);
}



