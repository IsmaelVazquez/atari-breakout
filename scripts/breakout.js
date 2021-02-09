// Constantes globales.

DEFAULT_VIDES = 3; // Vidas iniciales del juego
DEFAULT_BALL_SPEED = 240; // Velocidad inicial de la pelota
// DEFAULT_PADDLE_SPEED = 240; // Velocidad inicial de la paleta

MAX_MUR_WIDTH = 15; // Ancho del muro (en blques)
MAX_MUR_HEIGHT = 15; // Alto del muro (en bloques)
TOTXO_HEIGHT = 40; // Alto del bloque
TOTXO_WIDTH = TOTXO_HEIGHT/2; // Ancho del bloque (mitad del alto)
DEFAULT_BALL_RADIOUS = TOTXO_WIDTH/2; // Tamaño inicial de la pelota
// DEFAULT_PADDLE_WIDTH = TOTXO_WIDTH/2; // Tamaño inicial de la pelota


BOMB_RADIOUS = 3;  // Radio de la explosión
FREZEE_RADIOUS = 3;  // Radio de la explosión

START_LEVEL = 0; // Nivel donde inicia el juego

// Codigos de teclas
key_RIGHT = 39; 
key_LEFT = 37;
key_A = 65;
key_D = 68;
key_P = 80;
key_M = 77;

// Colores estandarizados (evita repetir por cada nivel)
COLORS = {
    b: "#FFF", // blanc
    t: "#f68332", // taronja
    c: "#4CF", // blue cel
    v: "#80c120", // verd
    e: "#D30", // vermell
    l: "#00D", // blau
    r: "#F7B", // rosa
    g: "#ffe433", // groc
    p: "#BBB", // plata
    d: "#FB4",  // dorat
    n: "rgba(19,17,17,0.95)",  // negre

    // Bloques especiales.
    // Estos no son contados dentro del contador de bloques a destruir,
    // por lo que se puede ganar el juego sin activarlos.
    A: "#55ff44",   // Vida extra
    B: "#55ff44",   // +10 Puntos
    C: "#55ff44",   // -15 puntos
    D: "#55ff44",   // Bomba -> explota elimina varios bloques al rededor
    E: "#55ff44",   // Mas grosos de bola
    F: "#55ff44",   // Menos grosor de bola
    G: "#55ff44",   // Bloque draw_brick. Ladrillo, protege un bloque normal en su interior.
    H: "#55ff44",   // Bloque draw_metal
    I: "#55ff44",   // Congelación, hace que los bloques contiguos se vuelvan draw_bricks
}

// Niveles / Mapas
// Niveles / Mapas
NIVELLS = [
    // 1
    [
        "",
        "  vvvvvvvvvvv",
        "  ddddddddddd",
        "  ppppppppppp",
        "  ttt  F  ttt",
        "  cCc     cCc",
        "  vvv     vvv",
        "  eee  B  eee",
        "  lll  F  lll",
        "  rrr     rrr",
        "  ggg  E  ggg",
        "  bbbbbbbbbbb",
        "  ddddddddddd",
        "  ccccccccccc",
        "  E    F    E",
        "             ",
        "             ",
        "       D     ",
    ],
    // 2
    [
        "",
        " F     gggg    ",
        "     gggggggg  ",
        "    gggggngggg ",
        "    gggggnggggD",
        "      ggggggggg",
        "        ggggggg",
        "H  H  H   ggggg",
        "        ggggggg",
        "      ggggggggE",
        "    gggggggggg ",
        "    gggggggggg ",
        " H   gggggggg  ",
        "       gggg    ",
    ],
    // 3
    [
        "",
        "     eeeeee    ",
        "    eeeeeeeee  ",
        "    vvvggvg    ",
        "   vgvgggvggg  ",
        "   vgvvgggvggg ",
        "   vvggggvvvv  ",
        "     ggggggg   ",
        "    vvGvvv     ",
        "   vvvGvvGvvv  ",
        "  vvvvGGGGvvvv ",
        "  ggvGgGGgGvgg ",
        "  gggGGGGGGggAD",
        "    GGG  GGG   ",
        "   vvv    vvv  ",
        "  vvvv    vvvv "
    ],
    // 4
    [
        "",
        "       nn      ",
        "      nccn     ",
        "  F  nccccn  E ",
        "    nccccccn   ",
        "   nccnccnccn  ",
        "   nccccccccn  ",
        "   FnncnncnnF  ",
        "  EnncnccncnnE ",
        "   ncncnncncn  ",
        "   nn n  n nn  ",
        "               ",
        "               ",
        "   GG H  H GG  ",
    ],
    // 5
    [
        "",
        "C  nnn D nnn   ",
        "   nvnnAnnvn  B",
        "   nnvnnnvnnB D",
        "   nvvvvvvvn   ",
        "  nvvHvvvHvvn  ",
        " nvvvvvvvvvvvn ",
        " nvnvvvvvvvnvn ",
        " nvnvnnnnnvnvn ",
        " nn nvvIvvn nn ",
        " nn nvvnvvn nn ",
        "    nnnnnnn   C",
        "    nnnnnnn    ",
        "               ",
        "               ",
        "    H     H    ",
        "               ",
        "       H       ",

    ],
    // 6
    [
        "",
        "   nnn C nnn   ",
        "F nnrnn nnrnn F",
        " nrnnrnnnrnnrn ",
        " nrrrrrArrrnrn ",
        " nrrrIrrrIrrrn ",
        " nrrrrrrrrrrrn ",
        "  nrrrrrrrrrn  ",
        "  nnrnnnnnrnn  ",
        "  nrnnGGGnnrn  ",
        "  nrnn   nnrn  ",
        "  nnn  H  nnn  ",
        "               ",
        "               ",
        "   H   H   H   ",
        "               ",
        "    H     H    ",
        " H          H  ",

    ],
    // 7
    [
        "       AD      ",
        "     GGGtt   BD",
        "  ccGGGtttgg c ",
        "  cGtttttgggccc",
        "  Gtttttggggccc",
        " dddddddggggccc",
        "tctttttccggccc ",
        " ttttccgggccccc",
        "ttttccccccccccc",
        "tttcnncccccnncc",
        "ttccbrncccnrbnc",
        "t cbrIncccnIrbc",
        "   bbrncccnrbb ",
        "   cccccccccc  ",
        "    cHcccHcc   ",
        "     cccccc    ",
        "H  H   H   H  H",
        "     G   G    C",
    ],
    // 8
    [
        "  D  vvvvv   B ",
        " CA vdddddv  G ",
        "    vdHdHdv GG ",
        "    vddIddv  G ",
        "     vdddv     ",
        "      GGG      ",
        "     vvvvv  C  ",
        "    vvvvvvv    ",
        "  F vvvvvvv    ",
        "   vvGGGGGvv   ",
        "   vvbbbbbvv   ",
        "   vHbbbbbHv   ",
        "   vvbbbbbvv   ",
        "    vbbbbbv  F ",
        "    vvvIvvv    ",
        " H  vvv vvv    ",
        "    vvv vvv H  ",
        "    vHv vHv    ",
        "    vvv vvv    ",
        "HG vvvvBvvvv GH",
    ]
];

/**                                 Game                             **/

function Game() {
    // Constructor de Game
    this.canvas, this.context;       // context per poder dibuixar en el Canvas
    this.width, this.height;          // mides del canvas

    // Elmentos del juego
    this.paddle;   // la raqueta
    this.ball;     // la pilota
    this.mur;
    
    // Información del juego
    this.nivell = 0
    this.vides = DEFAULT_VIDES;
    this.totxosRest = 0;
    this.nom = "Unknow"
    this.punts = 0;

    
    this.audioOn = false;
    this.pausat = false;
    this.t = 0;      // el temps

    // Eventos del teclado
    move_left = false;
    move_right = false;
}

Game.prototype.updateInfo = function () {
    // Actualiza el panel de información del juego (display)
    this.clearAlerts();
    $("#vides").html( "❤".repeat(this.vides)  + " ");
    $("#nivells").html( (this.nivell + 1) );
    $("#punts").html(game.punts);

    $("#punts-derr").html(game.punts);
    $("#punts-gana").html(game.punts);
}

Game.prototype.clearAlerts = function(){
    // Limpia las alertas. Evita que se muestren varias al mismo tiempo
    $("#alert_sigNivel").hide();
    $("#derrota").hide();
    $("#victoria").hide();
    $("#alertaContainer").hide();
    $("#alert_finalizado").hide();
}

Game.prototype.showAlert = function(aler){
    // Muestra la alerta especificada
    this.clearAlerts()
    $("#alertaContainer").show(); // Activa el fondo gris para resaltar la alerta
    $(aler).show();
}

Game.prototype.inicialitzar = function () {
    this.canvas = document.getElementById("game");
    this.width = TOTXO_HEIGHT * MAX_MUR_WIDTH;  // files de 15 totxos com a màxim
    this.canvas.width = this.width;
    this.height = TOTXO_WIDTH * (MAX_MUR_WIDTH + 10);
    this.canvas.height = this.height;
    this.context = this.canvas.getContext("2d");
    var soundtrack = document.getElementById("soundtrack")
    this.audioOn=false;

    this.paddle = new Paddle();
    this.ball = new Ball();

    this.updateInfo()
    imprimirTop();
    this.mur = new Mur();
    this.mur.crearMur();
    this.mur.draw(this.context);
    game.switchSound()
    game.playSound("#soundtrack")

    // Botón Mute/Unmute
    $("#switch_sound").click(function(){
        game.switchSound()
        game.playSound("#boton")
    });

    // Botón de Pausa/Unpausa
    $("#switch_pausa").on("click",function () {
        game.playSound("#boton")
        game.playSound("#soundtrack")
        if(!game.pausat) {
            game.parar();
            soundtrack.pause()
        }
        else{
            game.encendre();
            if(game.audioOn == true){
                soundtrack.play()
            }
        }
    });
    
    // Entrada de texto del nombre del jugador (dentro del alert de fin del juego, perder)
    $("#nom").on("change",function () {
        game.nom = $("#nom").val();
        game.poderBoto=true;
    });

    // Entrada de texto del nombre del jugador (dentro del alert de fin del juego, ganar)
    $("#nom-gana").on("change",function () {
        game.nom = $("#nom-gana").val();
        game.poderBoto=true;
    });

    // Reiniciar el juego
    $(".reiniciar").on("click" ,function () {
        comprovarTop();
        imprimirTop();

        game.activateKeys();
        game.updateInfo();
        // Reestablece todos los valores al inicial
        game.paddle = new Paddle();
        game.ball.posicionInicial();

        game.vides = DEFAULT_VIDES;
        game.totxosRest=0;
        game.punts=0;
        game.nivell = START_LEVEL;
        game.mur.crearMur();
        game.encendre();
    });

    // Botón de nivel superado
    $("#seguentNiv").on("click" ,function () {
        game.nivell++;
        game.updateInfo();
        game.clearAlerts();

        game.mur.crearMur();
        game.ball.posicionInicial();
        game.encendre();
    });


    // Botón de siguiente nivel
    $("#boton_nextLvl").on("click" ,function () {   
        game.nextLevel()
        game.playSound("#boton")
    });

    // Botón de anterior nivel
    $("#boton_backLvl").on("click" ,function () {   
        game.backLevel()
        game.playSound("#boton")
    });

    game.activateKeys()
    this.t = new Date().getTime();     // inicialitzem el temps
    game.parar();
    requestAnimationFrame(mainLoop);
};

Game.prototype.activateKeys = function(){
    // Movimiento de la raqueta, pausa y mute
    $(document).on("keydown", {game: this}, function (e) {
        console.log("FFF");
        
        if (e.keyCode == key_RIGHT || e.keyCode == key_D ) {
            e.data.game.move_right = true;
        }
        
        if (e.keyCode == key_LEFT || e.keyCode == key_A ) {
            e.data.game.move_left = true;
        }

        if (e.keyCode == key_P) {
            game.switchPause()
        }
        
        if (e.keyCode == key_M) {
            game.switchSound()
        }

    });

    $(document).on("keyup", {game: this}, function (e) {
        if (e.keyCode == key_RIGHT || e.keyCode == key_D ) {
            e.data.game.move_right = false;
        }

        if (e.keyCode == key_LEFT || e.keyCode == key_A ) {
            e.data.game.move_left = false;
        }
    });
}

Game.prototype.deactivateKeys = function(){
    $(document).off("keydown");
    $(document).off("onkeyup");
}

Game.prototype.update = function () {
    var dt = Math.min((new Date().getTime() - this.t) / 1000, 1); // temps, en segons, que ha passat des del darrer update
    this.t = new Date().getTime();

    this.paddle.update();    // Moviento de la raqueta
    this.ball.update(dt);    // moviento de la bola, depende del tiempo que ha pasado
};


Game.prototype.draw = function () {
    this.context.clearRect(0, 0, this.width, this.height);
    this.mur.draw(this.context);
    this.paddle.draw(this.context);
    this.ball.draw(this.context);

};

Game.prototype.playSound = function(source){
    // Reproducir sonido indicado, solo si está unmute
    if(this.audioOn) {
        ($(source)[0]).play();
    }
}

Game.prototype.parar = function () {
    // Detener todas las acciones. Actualizar la imagen del boton de pausa
    $("#img_pausa").attr("src","imatges/play.png");
    game.ball.animada = false;
    game.paddle.animada = false;
    game.pausat = true;
};

Game.prototype.encendre = function () {
    // Reanudar todas las acciones. Actualizar la imagen del boton de pausa
    $("#img_pausa").attr("src","imatges/pause.png");
    game.ball.animada = true;
    game.paddle.animada = true;
    game.pausat = false;
    game.updateInfo();
};

Game.prototype.switchSound = function () {
    // Activar/Desactivar el sonido. Actualizar la imagen del boton de mute
    if(game.audioOn){
        $("#img_sound").attr("src","imatges/soOff.png");
        game.audioOn=false;
        soundtrack.muted = true;
        soundtrack.pause()
    }
    else{
        $("#img_sound").attr("src","imatges/soOn.png");
        game.audioOn=true;
        soundtrack.muted = false;
        soundtrack.play()

    }
};

Game.prototype.switchPause = function () {
    // Activar/Desactivar la pausa
    if(!game.pausat) {
        game.parar();
        soundtrack.muted = true;
        soundtrack.pause()
    }
    else{
        game.encendre();
        soundtrack.muted = false;
        if(game.audioOn == true){
            soundtrack.play()
        }
    }
};

Game.prototype.nextLevel = function(){
    // Boton de aumentar nivel inicial. Solo aumenta si es posible 
    if (game.nivell < NIVELLS.length -1) {
        game.nivell ++;
        START_LEVEL ++;

        game.paddle = new Paddle();
        game.ball = new Ball();
        game.vides = DEFAULT_VIDES;
        game.totxosRest=0;
        game.punts=0;
        game.mur.crearMur();
        game.updateInfo()
    }
}

Game.prototype.backLevel = function(){
    // Boton de reducir nivel inicial. Solo aumenta si es posible
    if (game.nivell > 0) {
        game.nivell --;
        START_LEVEL --;

        game.paddle = new Paddle();
        game.ball = new Ball();
        game.vides = DEFAULT_VIDES;
        game.totxosRest=0;
        game.punts=0;
        game.mur.crearMur();
        game.updateInfo()
    }
    game.updateInfo();
}

/**                                 Paddle                           **/
function Paddle() {
    this.width = 300;
    this.height = 20;                               // medidas
    this.x = game.width / 2 - this.width / 2;
    this.y = game.height - 50;    // posicion inicial
    this.vx = 10;                                                     // velocidad = 10 píxels por fotograma
    this.color = "#fbb";
    this.animada = false;// rojo
}

Paddle.prototype.update = function () {
    if(this.animada){
        if (game.move_right) {
            this.x = Math.min(game.width - this.width, this.x + this.vx);
        } else if (game.move_left) {
            this.x = Math.max(0, this.x - this.vx);
        }
    }
};

Paddle.prototype.draw = function (ctx) {
    ctx.save();
    ctx.fillStyle = this.color;
    ctx.fillRect(this.x, this.y, this.width, this.height);
    ctx.restore();
};


/**                                 Ball                             **/
function Ball() {
    this.vx = DEFAULT_BALL_SPEED;
    this.vy = - DEFAULT_BALL_SPEED;
    this.radi = DEFAULT_BALL_RADIOUS;                 // radio de la pelota
    this.color = "#333";  // gris oscuro
    this.animada = false;
    this.posicionInicial();
}

Ball.prototype.posicionInicial = function(){
    this.x = game.paddle.x + game.paddle.width/2;
    // this.y = game.paddle.y - 15;         // posició del centro de la pelota
    this.y = game.paddle.y - this.radi - 5;          // posició del centro de la pelota
}

Ball.prototype.update = function (dt) {
    if(this.animada){
        var dtXoc;      // tiempo empleado hasta el xoc
        var xoc = false;
        var intentPerdut = false;// si hi hay xoc en este dt
        var k;          // proporcioen d ela prajectoria que supera este bloque
        var trajectoria = {};
        trajectoria.p1 = {x: this.x, y: this.y};
        trajectoria.p2 = {x: this.x + this.vx * dt, y: this.y + this.vy * dt};  // nova posició de la bola

        // mirar todos los posibles xocs
        // Xoc con el suelo
        if (trajectoria.p2.y + this.radi > game.height) {
            // hem perdut l'intent actual
            intentPerdut = true;
            game.vides--;
            game.updateInfo();
            if(game.vides>=1){
                this.posicionInicial()
                game.playSound("#derPart")
            }
            else{
                this.x = -20;
                this.y = -20;
                game.showAlert("#alert_derrota");
                game.playSound("#der")
                game.parar();
                game.deactivateKeys();
            }
        }

        // Xoc con el techo
        if (trajectoria.p2.y - this.radi < 0) {
            k = (trajectoria.p2.y - this.radi) / this.vy;  // k sempre positiu
            // ens col·loquem just tocant la vora de dalt
            this.x = trajectoria.p2.x - k * this.vx;
            this.y = this.radi;
            this.vy = -this.vy;
            dtXoc = k * dt;  // temps que queda
            xoc = true;
            game.playSound("#pop")
        }

        // Xoc con la parte derecha
        if (trajectoria.p2.x + this.radi > game.width) {
            k = (trajectoria.p2.x + this.radi - game.width) / this.vx;
            // ens col·loquem just tocant la vora de la dreta
            this.x = game.width - this.radi;
            this.y = trajectoria.p2.y - k * this.vy;
            this.vx = -this.vx;
            dtXoc = k * dt;  // temps que queda
            xoc = true;
            game.playSound("#pop")
        }

        // Xoc con la parte izquierda
        if (trajectoria.p2.x - this.radi < 0) {
            k = (trajectoria.p2.x - this.radi) / this.vx;  // k sempre positiu
            // ens col·loquem just tocant la vora de l'esquerra
            this.x = this.radi;
            this.y = trajectoria.p2.y - k * this.vy;
            this.vx = -this.vx;
            dtXoc = k * dt;  // temps que queda
            xoc = true;
            game.playSound("#pop")
        }

        // Xoc con la raqueta
        var pXoc = Utilitats.interseccioSegmentRectangle(trajectoria, {
            p: {x: game.paddle.x - this.radi, y: game.paddle.y - this.radi},
            w: game.paddle.width + 2 * this.radi, h: game.paddle.height + 2 * this.radi
        });
        if (pXoc) {
            xoc = true;
            game.playSound("#pop2")
            this.x = pXoc.p.x;
            this.y = pXoc.p.y;
            switch (pXoc.vora) {
                case "superior":
                    this.vy = -this.vy;
                    break;
            }
            dtXoc = (Utilitats.distancia(pXoc.p, trajectoria.p2) / Utilitats.distancia(trajectoria.p1, trajectoria.p2)) * dt;
        }

        // Xoc con el muro
        // xoc con un totxo
        var mesAprop = Infinity, distancia;
        for (var i = 0; i < game.mur.totxos.length; i++) {
            if (game.mur.totxos[i].existeix) {
                var pXoc = Utilitats.interseccioSegmentRectangle(trajectoria, {
                    p: {x: game.mur.totxos[i].x - this.radi, y: game.mur.totxos[i].y - this.radi},
                    w: game.mur.totxos[i].w + 2 * this.radi, h: game.mur.totxos[i].h + 2 * this.radi
                });
                
                if (pXoc) {
                    distancia = Utilitats.distancia(trajectoria.p1, pXoc.p);
                    if (distancia < mesAprop) {
                        mesAprop = distancia;
                        xoc = true;
                        this.x = pXoc.p.x;
                        this.y = pXoc.p.y;
                        switch (pXoc.vora) {
                            case "superior":
                            case "inferior":
                                this.vy = -this.vy;
                                break;
                            case "esquerra":
                            case "dreta"   :
                                this.vx = -this.vx;
                                break;
                        }
                        dtXoc = (Utilitats.distancia(pXoc.p, trajectoria.p2) / Utilitats.distancia(trajectoria.p1, trajectoria.p2)) * dt;
                        
                        // Contacto con el bloque -> en otra función para hacerla más claro
                        this.xocOnToxto(game.mur.totxos[i]);

                    }
                }
            }


        }

        // actualizar posicion bola
        if (xoc) {
            this.update(dtXoc);  // llamada recursiva
        } else if(!intentPerdut){
            this.x = trajectoria.p2.x;
            this.y = trajectoria.p2.y;
        }
    }
};

Ball.prototype.xocOnToxto = function(toxto){
    // Contacto con el bloque
    toxto.existeix = false;

    // De acuerdo al contacto activa las acciones necesarias
    switch (toxto.key) {
        case "A": // vida extra
            game.playSound("#sound_live_up")
            game.vides ++;

            // Efecto de espabilar corazones
            $("#vides").fadeToggle();
            $("#vides").fadeToggle();
            break;
        case "B": // Suma 10 puntos
            game.playSound("#sound_points_up")
            game.punts += 10 ;
            
            // Efecto de cambiar de color el puntaje
            $("#punts").css('color', 'blue');
            // Esperar un momento y volver a negro
            setTimeout(function () {
                $("#punts").css("color", "black");
            }, 500);
            break;
        case "C": // Resta 15 puntos
            game.playSound("#sound_points_down")
            if (game.punts > 15){
                game.punts -= 15 ;
            }else{
                game.punts = 0 ;
            }

            // Efecto de cambiar de color el puntaje
            $("#punts").css('color', 'red');
            // Esperar un momento y volver a negro
            setTimeout(function () {
                $("#punts").css("color", "black");
            }, 500);

            break;
        case "D": // Bomba
            game.playSound("#sound_bomb")
            // Encontrar los bloques cercanos
            for (var i = 0; i < game.mur.totxos.length; i++) {
                var temp_toxto = game.mur.totxos[i]
                // Revisar si horizontalmente lo alcanza
                if ( toxto.j - BOMB_RADIOUS <= temp_toxto.j && temp_toxto.j <= toxto.j + BOMB_RADIOUS){
                    // Revisar si verticalmente lo alcanza
                    if ( toxto.i - BOMB_RADIOUS <= temp_toxto.i && temp_toxto.i <= toxto.i + BOMB_RADIOUS){
                        // Eliminar los bloques normales y vida y sumapuntos, pero si rompemos no suma puntos a los especiales, si no es su funcion.
                        if (['A','B'].includes(temp_toxto.key) ) {
                            game.totxosRest++;
                            game.punts--;
                        }
                        if ( !['C', 'D', 'E', 'F', 'H', 'I'].includes(temp_toxto.key) ){
                            temp_toxto.existeix = false;
                            game.totxosRest--;
                            game.punts++;

                        }

                        // Si el bloque es de ladrillo, pasarlo a normal
                        if (  'G' == temp_toxto.key ){
                            temp_toxto.key = "c";
                        }

                    }
                }
            }

            // Efecto de cambiar de color el display
            $("#display").css('background', 'yellow');
            // Esperar un momento y volver color normal
            setTimeout(function () {
                $("#display").css("background", "#28c0db");
            }, 125);
            break;
        case "E": // Aumenta tamaño de la bola 15%
            game.playSound("#sound_speed")
            game.ball.radi *= 1.15;
            break;
        case "F": // Disminuye tamaño de la bola 15%
            game.playSound("#sound_speed")
            game.ball.radi *= 0.85;
            break;
        case "G": // Bloque de ladrillo
            game.playSound("#sound_brick2")
            toxto.existeix = true;
            toxto.key = "c";
            break;
        case "H": // Bloque metal
            game.playSound("#sound_brick3")
            toxto.existeix = true;
            break;
        case "I": // Bloque de congelación
            game.playSound("#sound_freeze")
            // Encontrar los bloques cercanos
            for (var i = 0; i < game.mur.totxos.length; i++) {
                var temp_toxto = game.mur.totxos[i]
                // Revisar si horizontalmente lo alcanza
                if ( toxto.j - FREZEE_RADIOUS <= temp_toxto.j && temp_toxto.j <= toxto.j + FREZEE_RADIOUS){
                    // Revisar si verticalmente lo alcanza
                    if ( toxto.i - FREZEE_RADIOUS <= temp_toxto.i && temp_toxto.i <= toxto.i + FREZEE_RADIOUS){
                        // congelar solo bloques normales
                        if ( !['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I'].includes(temp_toxto.key) ){
                            temp_toxto.key = "G";
                        }
                    }
                }
            }

            // Efecto de cambiar de color el display
            $("#display").css('background', 'blue');
            // Esperar un momento y volver color normal
            setTimeout(function () {
                $("#display").css("background", "#28c0db");
            }, 125);
            break;
        default: // Bloque normal
            game.playSound("#xoc")
            game.totxosRest--;
            game.punts++;
        break;
    }

    game.updateInfo();
    // Revisar si alcanzó todos los bloques
    if(game.totxosRest<=0){
        game.parar();
        if(game.nivell < NIVELLS.length -1){
            game.showAlert("#alert_sigNivel")
            game.playSound("#vicPart")
            
            // Cada que sube de nivel reducir tamaño de la paleta
            // y aumentar la velocidad de la pelota
            game.paddle.width   -=  game.paddle.width > 75 ? 25:0 ;
            game.ball.vx        *= 1.04;
            game.ball.vy        *= 1.04;
        }
        else{
            game.playSound("#vic")
            game.showAlert("#alert_finalizado")
            game.deactivateKeys();
        }
    }

}


Ball.prototype.draw = function (ctx) {
    ctx.save();
    ctx.fillStyle = this.color;
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.radi, 0, 2 * Math.PI);   // pilota rodona
    ctx.fill();
    ctx.stroke();
    ctx.restore();
};


/**                                 Totxo                            **/
function Totxo(i, j, key) {
    this.i = i;
    this.j = j;

    this.x = j * TOTXO_HEIGHT;
    this.y = i * TOTXO_WIDTH;
    this.w = TOTXO_HEIGHT;
    this.h = TOTXO_WIDTH;
    
    this.color = COLORS[key];
    this.key = key
    this.existeix = true;
}

Totxo.prototype.draw = function (ctx) {
    ctx.save();
    ctx.fillStyle = this.color;
    
    // Dibujar el ladrilo segun su tipo
    switch (this.key) {
        case "A":   this.draw_extraLife(ctx);   break;
        case "B":   this.draw_pointsUp(ctx);    break;
        case "C":   this.draw_pointsDown(ctx);  break;
        case "D":   this.draw_bomb(ctx);        break;
        case "E":   this.draw_sizeUp(ctx);      break;
        case "F":   this.draw_sizeDown(ctx);    break;
        case "G":   this.draw_brick(ctx);       break;
        case "H":   this.draw_metal(ctx);       break;
        case "I":   this.draw_freezer(ctx);     break;
        default:    this.draw_normal(ctx);      break;
    }
    
    // Para todos los ladrillos, dibujar el borde gris
    ctx.strokeStyle = "#333";
    ctx.lineWidth = 1;
    ctx.strokeRect(this.x, this.y, this.w, this.h);
    ctx.restore();
};

//Dibujo de los ladrillos.
Totxo.prototype.draw_normal = function(ctx){
    ctx.fillRect(this.x, this.y, this.w, this.h);
}

Totxo.prototype.draw_extraLife = function(ctx){
    //    Dibujar un corazon
    ctx.fillStyle = "#ff0000";
    ctx.lineWidth = 3;
    ctx.beginPath();
    ctx.lineTo(this.x + (this.w-0) * 0.461,this.y + (this.h-0) * 0.982);
    ctx.lineTo(this.x + (this.w-0) * 0.348,this.y + (this.h-0) * 0.860);
    ctx.lineTo(this.x + (this.w-0) * 0.347,this.y + (this.h-0) * 0.860);
    ctx.lineTo(this.x + (this.w-0) * 0.099,this.y + (this.h-0) * 0.570);
    ctx.lineTo(this.x + (this.w-0) * 0.000,this.y + (this.h-0) * 0.266);
    ctx.lineTo(this.x + (this.w-0) * 0.079,this.y + (this.h-0) * 0.000);
    ctx.lineTo(this.x + (this.w-0) * 0.322,this.y + (this.h-0) * 0.000);
    ctx.lineTo(this.x + (this.w-0) * 0.436,this.y + (this.h-0) * 0.229);
    ctx.lineTo(this.x + (this.w-0) * 0.564,this.y + (this.h-0) * 0.229);
    ctx.lineTo(this.x + (this.w-0) * 0.699,this.y + (this.h-0) * 0.000);
    ctx.lineTo(this.x + (this.w-0) * 0.921,this.y + (this.h-0) * 0.000);
    ctx.lineTo(this.x + (this.w-0) * 0.980,this.y + (this.h-0) * 0.121);
    ctx.lineTo(this.x + (this.w-0) * 1.000,this.y + (this.h-0) * 0.266);
    ctx.lineTo(this.x + (this.w-0) * 0.901,this.y + (this.h-0) * 0.570);
    ctx.lineTo(this.x + (this.w-0) * 0.653,this.y + (this.h-0) * 0.860);
    ctx.lineTo(this.x + (this.w-0) * 0.539,this.y + (this.h-0) * 0.982);
    ctx.lineTo(this.x + (this.w-0) * 0.500,this.y + (this.h-0) * 1.000);
    ctx.lineTo(this.x + (this.w-0) * 0.500,this.y + (this.h-0) * 1.000);
    ctx.fill();
    ctx.closePath();
    ctx.stroke();
}

Totxo.prototype.draw_bomb = function(ctx){
    // Dibujar explosion
    // Amarillo
    ctx.fillStyle = "#ffee00";
    ctx.beginPath();
    ctx.lineTo(this.x + (this.w-0) * 0.862,this.y + (this.h-0) * 0.000);
    ctx.lineTo(this.x + (this.w-0) * 0.775,this.y + (this.h-0) * 0.450);
    ctx.lineTo(this.x + (this.w-0) * 1.000,this.y + (this.h-0) * 0.490);
    ctx.lineTo(this.x + (this.w-0) * 0.775,this.y + (this.h-0) * 0.602);
    ctx.lineTo(this.x + (this.w-0) * 0.823,this.y + (this.h-0) * 1.000);
    ctx.lineTo(this.x + (this.w-0) * 0.585,this.y + (this.h-0) * 0.708);
    ctx.lineTo(this.x + (this.w-0) * 0.438,this.y + (this.h-0) * 0.816);
    ctx.lineTo(this.x + (this.w-0) * 0.461,this.y + (this.h-0) * 0.653);
    ctx.lineTo(this.x + (this.w-0) * 0.000,this.y + (this.h-0) * 0.541);
    ctx.lineTo(this.x + (this.w-0) * 0.473,this.y + (this.h-0) * 0.490);
    ctx.lineTo(this.x + (this.w-0) * 0.385,this.y + (this.h-0) * 0.315);
    ctx.lineTo(this.x + (this.w-0) * 0.585,this.y + (this.h-0) * 0.296);
    ctx.fill();
    ctx.closePath();
    ctx.stroke();

    // Rojo
    ctx.fillStyle = "#ff0000";
    ctx.beginPath();
    ctx.lineTo(this.x + (this.w-0) * 0.506,this.y + (this.h-0) * 0.394);
    ctx.lineTo(this.x + (this.w-0) * 0.623,this.y + (this.h-0) * 0.364);
    ctx.lineTo(this.x + (this.w-0) * 0.691,this.y + (this.h-0) * 0.272);
    ctx.lineTo(this.x + (this.w-0) * 0.691,this.y + (this.h-0) * 0.451);
    ctx.lineTo(this.x + (this.w-0) * 0.804,this.y + (this.h-0) * 0.520);
    ctx.lineTo(this.x + (this.w-0) * 0.655,this.y + (this.h-0) * 0.520);
    ctx.lineTo(this.x + (this.w-0) * 0.721,this.y + (this.h-0) * 0.683);
    ctx.lineTo(this.x + (this.w-0) * 0.607,this.y + (this.h-0) * 0.589);
    ctx.lineTo(this.x + (this.w-0) * 0.542,this.y + (this.h-0) * 0.683);
    ctx.lineTo(this.x + (this.w-0) * 0.506,this.y + (this.h-0) * 0.616);
    ctx.lineTo(this.x + (this.w-0) * 0.366,this.y + (this.h-0) * 0.603);
    ctx.lineTo(this.x + (this.w-0) * 0.556,this.y + (this.h-0) * 0.519);
    ctx.fill();
    ctx.closePath();
    ctx.stroke();
}

Totxo.prototype.draw_pointsUp = function(ctx){
        ctx.strokeStyle = "#000000";
        ctx.lineWidth = 3;
        ctx.beginPath();
        ctx.moveTo(this.x + (this.w-0) * 0.448,this.y + (this.h-0) * 1.000);
        ctx.lineTo(this.x + (this.w-0) * 0.448,this.y + (this.h-0) * 0.000);
        ctx.lineTo(this.x + (this.w-0) * 1.000,this.y + (this.h-0) * 0.000);
        ctx.lineTo(this.x + (this.w-0) * 1.000,this.y + (this.h-0) * 0.469);
        ctx.lineTo(this.x + (this.w-0) * 0.448,this.y + (this.h-0) * 0.469);
        ctx.stroke();
        ctx.restore();
        ctx.closePath();

        ctx.strokeStyle = "#0000FF";
        ctx.lineWidth = 4;
        ctx.beginPath();
        ctx.moveTo(this.x + (this.w-0) * 0.185,this.y + (this.h-0) * 0.031);
        ctx.lineTo(this.x + (this.w-0) * 0.185,this.y + (this.h-0) * 0.500);
        ctx.moveTo(this.x + (this.w-0) * 0.000,this.y + (this.h-0) * 0.265);
        ctx.lineTo(this.x + (this.w-0) * 0.369,this.y + (this.h-0) * 0.265);
        ctx.stroke();
        ctx.restore();
        ctx.closePath();
}

Totxo.prototype.draw_pointsDown = function(ctx){
    // Dibuja P -
    ctx.strokeStyle = "#000000";
    ctx.lineWidth = 3;
    ctx.beginPath();
    ctx.moveTo(this.x + (this.w-0) * 0.448,this.y + (this.h-0) * 1.000);
    ctx.lineTo(this.x + (this.w-0) * 0.448,this.y + (this.h-0) * 0.000);
    ctx.lineTo(this.x + (this.w-0) * 1.000,this.y + (this.h-0) * 0.000);
    ctx.lineTo(this.x + (this.w-0) * 1.000,this.y + (this.h-0) * 0.469);
    ctx.lineTo(this.x + (this.w-0) * 0.448,this.y + (this.h-0) * 0.469);
    ctx.stroke();
    ctx.restore();
    ctx.closePath();

    ctx.strokeStyle = "#FF0000";
    ctx.lineWidth = 4;
    ctx.beginPath();
    ctx.moveTo(this.x + (this.w-0) * 0.000,this.y + (this.h-0) * 0.265);
    ctx.lineTo(this.x + (this.w-0) * 0.369,this.y + (this.h-0) * 0.265);
    ctx.stroke();
    ctx.restore();
    ctx.closePath();
}
Totxo.prototype.draw_sizeUp = function(ctx){
        ctx.fillStyle = "rgba(0, 0, 0, 0)";
        ctx.strokeStyle = "#000000";
        ctx.lineWidth = 3;

        ctx.beginPath();
        ctx.moveTo(this.x + (this.w-0) * 1.000,this.y + (this.h-0) * 1.000);
        ctx.lineTo(this.x + (this.w-0) * 0.500,this.y + (this.h-0) * 0.500);
        ctx.lineTo(this.x + (this.w-0) * 0.000,this.y + (this.h-0) * 1.000);
        ctx.stroke();
        ctx.closePath();
        
        ctx.beginPath();
        ctx.moveTo(this.x + (this.w-0) * 1.000,this.y + (this.h-0) * 1.00);
        ctx.lineTo(this.x + (this.w-0) * 0.500,this.y + (this.h-0) * 0.250);
        ctx.lineTo(this.x + (this.w-0) * 0.000,this.y + (this.h-0) * 1.00);
        ctx.stroke();
        ctx.closePath();
        
        ctx.beginPath();
        ctx.moveTo(this.x + (this.w-0) * 1.000,this.y + (this.h-0) * 1.000);
        ctx.lineTo(this.x + (this.w-0) * 0.500,this.y + (this.h-0) * 0.000);
        ctx.lineTo(this.x + (this.w-0) * 0.000,this.y + (this.h-0) * 1.000);
        ctx.stroke();
        ctx.closePath();
}

Totxo.prototype.draw_sizeDown = function(ctx){
    ctx.strokeStyle = "#000000";
    ctx.lineWidth = 3;

    ctx.beginPath();
    ctx.moveTo(this.x + (this.w-0) * 1.000,this.y + (this.h-0) * 0.000);
    ctx.lineTo(this.x + (this.w-0) * 0.500,this.y + (this.h-0) * 1.0);
    ctx.lineTo(this.x + (this.w-0) * 0.000,this.y + (this.h-0) * 0.000);
    ctx.stroke();
    ctx.closePath();
    
    ctx.beginPath();
    ctx.moveTo(this.x + (this.w-0) * 1.000,this.y + (this.h-0) * 0.00);
    ctx.lineTo(this.x + (this.w-0) * 0.500,this.y + (this.h-0) * 0.750);
    ctx.lineTo(this.x + (this.w-0) * 0.000,this.y + (this.h-0) * 0.000);
    ctx.stroke();
    ctx.closePath();
    
    ctx.beginPath();
    ctx.moveTo(this.x + (this.w-0) * 1.000,this.y + (this.h-0) * 0.0);
    ctx.lineTo(this.x + (this.w-0) * 0.500,this.y + (this.h-0) * 0.500);
    ctx.lineTo(this.x + (this.w-0) * 0.000,this.y + (this.h-0) * 0.00);
    ctx.stroke();
    ctx.closePath();
}

Totxo.prototype.draw_brick = function(ctx){
    // ctx.strokeStyle = "#b5b5b5";
    // ctx.fillRect(this.x, this.y, this.w, this.h);

    ctx.strokeStyle = "#000000";
    ctx.lineWidth = 3;
    ctx.beginPath();
    ctx.moveTo(this.x + (this.w-0) * 0.000,this.y + (this.h-0) * 0.500);
    ctx.lineTo(this.x + (this.w-0) * 1.000,this.y + (this.h-0) * 0.500);
    ctx.stroke();
    ctx.closePath();
    
    ctx.beginPath();
    ctx.moveTo(this.x + (this.w-0) * 0.500,this.y + (this.h-0) * 0.00);
    ctx.lineTo(this.x + (this.w-0) * 0.500,this.y + (this.h-0) * 0.500);
    ctx.stroke();
    ctx.closePath();
    
    ctx.beginPath();
    ctx.moveTo(this.x + (this.w-0) * 0.750,this.y + (this.h-0) * 1.00);
    ctx.lineTo(this.x + (this.w-0) * 0.750,this.y + (this.h-0) * 0.500);
    ctx.stroke();
    ctx.closePath();

    ctx.beginPath();
    ctx.moveTo(this.x + (this.w-0) * 0.250,this.y + (this.h-0) * 1.00);
    ctx.lineTo(this.x + (this.w-0) * 0.250,this.y + (this.h-0) * 0.500);
    ctx.stroke();
    ctx.closePath();
}

Totxo.prototype.draw_metal = function(ctx){
    ctx.strokeStyle = "#000000";
    ctx.lineWidth = 3;
    ctx.beginPath();
    ctx.moveTo(this.x + (this.w-0) * 0.000,this.y + (this.h-0) * 0.000);
    ctx.lineTo(this.x + (this.w-0) * 1.000,this.y + (this.h-0) * 1.000);
    ctx.stroke();
    ctx.closePath();
    
    ctx.beginPath();
    ctx.moveTo(this.x + (this.w-0) * 1.000,this.y + (this.h-0) * 0.000);
    ctx.lineTo(this.x + (this.w-0) * 0.000,this.y + (this.h-0) * 1.000);
    ctx.stroke();
    ctx.closePath();
}

Totxo.prototype.draw_freezer = function(ctx){
    ctx.strokeStyle = "#0000FF";
    ctx.lineWidth = 3;

    // Diagonales
    ctx.beginPath();
    ctx.moveTo(this.x + (this.w-0) * 0.000,this.y + (this.h-0) * 0.000);
    ctx.lineTo(this.x + (this.w-0) * 0.250,this.y + (this.h-0) * 0.250);
    ctx.stroke();
    ctx.closePath();

    ctx.beginPath();
    ctx.moveTo(this.x + (this.w-0) * 1.000,this.y + (this.h-0) * 1.000);
    ctx.lineTo(this.x + (this.w-0) * 0.750,this.y + (this.h-0) * 0.750);
    ctx.stroke();
    ctx.closePath();


    ctx.beginPath();
    ctx.moveTo(this.x + (this.w-0) * 1.000,this.y + (this.h-0) * 0.000);
    ctx.lineTo(this.x + (this.w-0) * 0.750,this.y + (this.h-0) * 0.250);
    ctx.stroke();
    ctx.closePath();

    ctx.beginPath();
    ctx.moveTo(this.x + (this.w-0) * 0.000,this.y + (this.h-0) * 1.000);
    ctx.lineTo(this.x + (this.w-0) * 0.250,this.y + (this.h-0) * 0.750);
    ctx.stroke();
    ctx.closePath();

    // Rectas
    ctx.beginPath();
    ctx.moveTo(this.x + (this.w-0) * 0.500,this.y + (this.h-0) * 0.000);
    ctx.lineTo(this.x + (this.w-0) * 0.500,this.y + (this.h-0) * 0.250);
    ctx.stroke();
    ctx.closePath();

    ctx.beginPath();
    ctx.moveTo(this.x + (this.w-0) * 0.500,this.y + (this.h-0) * 0.750);
    ctx.lineTo(this.x + (this.w-0) * 0.500,this.y + (this.h-0) * 1.000);
    ctx.stroke();
    ctx.closePath();

    ctx.beginPath();
    ctx.moveTo(this.x + (this.w-0) * 0.000,this.y + (this.h-0) * 0.500);
    ctx.lineTo(this.x + (this.w-0) * 0.250,this.y + (this.h-0) * 0.500);
    ctx.stroke();
    ctx.closePath();

    ctx.beginPath();
    ctx.moveTo(this.x + (this.w-0) * 0.750,this.y + (this.h-0) * 0.500);
    ctx.lineTo(this.x + (this.w-0) * 1.000,this.y + (this.h-0) * 0.500);
    ctx.stroke();
    ctx.closePath();
}


/**                             Mur                                  **/
function Mur() {
    this.totxos = []; //array de totxos
}

Mur.prototype.crearMur = function () {
    this.totxos = [];
    var totxosAct = NIVELLS[game.nivell];
    
    for (var i = 0; i < totxosAct.length; i++) {
        var fila = totxosAct[i];
        for (var j = 0; j < fila.length; j++) {
            key = fila.charAt(j)
            if (key != " "){
                totxo = new Totxo(i, j, key)
                this.totxos.push(totxo);
                // Los bloques especiales no se cuenta (solo ladrillo) porque se puede ganar sin ellos
                if (!['A', 'B', 'C', 'D', 'E', 'F', 'H', 'I'].includes(key)){
                    game.totxosRest++;
                }

            }
        }
    }
};

Mur.prototype.draw = function (ctx) {
    for (var i = 0; i < this.totxos.length; i++) {
        if (this.totxos[i].existeix)
            this.totxos[i].draw(ctx);
    }
};


/**                             Utilitats                            **/
var Utilitats = {};

Utilitats.puntInterseccio = function (p1, p2, p3, p4) {
    // converteix segment1 a la forma general de recta: Ax+By = C
    var a1 = p2.y - p1.y;
    var b1 = p1.x - p2.x;
    var c1 = a1 * p1.x + b1 * p1.y;

    // converteix segment2 a la forma general de recta: Ax+By = C
    var a2 = p4.y - p3.y;
    var b2 = p3.x - p4.x;
    var c2 = a2 * p3.x + b2 * p3.y;

    // calculem el punt intersecció
    var d = a1 * b2 - a2 * b1;

    // línies paral·leles quan d és 0
    if (d == 0) {
        return false;
    } else {
        var x = (b2 * c1 - b1 * c2) / d;
        var y = (a1 * c2 - a2 * c1) / d;
        var puntInterseccio = {x: x, y: y};	// aquest punt pertany a les dues rectes
        if (Utilitats.contePunt(p1, p2, puntInterseccio) && Utilitats.contePunt(p3, p4, puntInterseccio))
            return puntInterseccio;
    }
}

Utilitats.contePunt = function (p1, p2, punt) {
    return (valorDinsInterval(p1.x, punt.x, p2.x) || valorDinsInterval(p1.y, punt.y, p2.y));

    // funció interna
    function valorDinsInterval(a, b, c) {
        // retorna cert si b està entre a i b, ambdos exclosos
        if (Math.abs(a - b) < 0.000001 || Math.abs(b - c) < 0.000001) { // no podem fer a==b amb valors reals!!
            return false;
        }
        return (a < b && b < c) || (c < b && b < a);
    }
}

Utilitats.distancia = function (p1, p2) {
    return Math.sqrt((p2.x - p1.x) * (p2.x - p1.x) + (p2.y - p1.y) * (p2.y - p1.y));
}

Utilitats.interseccioSegmentRectangle = function (seg, rect) {  // seg={p1:{x:,y:},p2:{x:,y:}}
    // rect={p:{x:,y:},w:,h:}
    var pI, dI, pImin, dImin = Infinity, vora;
    // vora superior
    pI = Utilitats.puntInterseccio(seg.p1, seg.p2,
        {x: rect.p.x, y: rect.p.y}, {x: rect.p.x + rect.w, y: rect.p.y});
    if (pI) {
        dI = Utilitats.distancia(seg.p1, pI);
        if (dI < dImin) {
            dImin = dI;
            pImin = pI;
            vora = "superior";
        }
    }
    // vora inferior
    pI = Utilitats.puntInterseccio(seg.p1, seg.p2,
        {x: rect.p.x + rect.w, y: rect.p.y + rect.h}, {x: rect.p.x, y: rect.p.y + rect.h});
    if (pI) {
        dI = Utilitats.distancia(seg.p1, pI);
        if (dI < dImin) {
            dImin = dI;
            pImin = pI;
            vora = "inferior";
        }
    }

    // vora esquerra
    pI = Utilitats.puntInterseccio(seg.p1, seg.p2,
        {x: rect.p.x, y: rect.p.y + rect.h}, {x: rect.p.x, y: rect.p.y});
    if (pI) {
        dI = Utilitats.distancia(seg.p1, pI);
        if (dI < dImin) {
            dImin = dI;
            pImin = pI;
            vora = "esquerra";
        }
    }
    // vora dreta
    pI = Utilitats.puntInterseccio(seg.p1, seg.p2,
        {x: rect.p.x + rect.w, y: rect.p.y}, {x: rect.p.x + rect.w, y: rect.p.y + rect.h});
    if (pI) {
        dI = Utilitats.distancia(seg.p1, pI);
        if (dI < dImin) {
            dImin = dI;
            pImin = pI;
            vora = "dreta";
        }
    }

    if (vora) {
        return {p: pImin, vora: vora}
    }
}



// -----------------   -----------------   -----------------   ----------------- //

// Funciones globales
function comprovarTop() {
    // Obtener ranking guardado (JSON string)
    var ranking = JSON.parse(localStorage.getItem("ranking"))
    
    // Sino existe previamente, crear
    if (ranking == null || ranking == "null"){
        ranking = [];
    }

    // Revisar si el nombre ya ha sido ingresado
    // Si ya fue ingresado, quedarse con el mayor valor entre el 
    // existente y el actual
    existe = false;
    for (let i = 0; i < ranking.length; i++) {
        if(game.nom ==  ranking[i].nom){
            ranking[i].punts = Math.max(game.punts, ranking[i].punts)
            existe = true;
        }
    }
    // En caso que no exista, agregarlo al vector de ranking
    if (!existe){
        ranking.push({'nom': game.nom, 'punts': game.punts})
    }

    // Ordenar de acuardo a los puntos
    ranking.sort(function(a,b) { return b.punts - a.punts ; });
    // Solo guardar los 3 primeros en formato JSON string
    localStorage.setItem("ranking", JSON.stringify(ranking.slice(0, 3)));
}

function imprimirTop(){
    // Obtener ranking guardado (JSON string)
    var ranking = JSON.parse(localStorage.getItem("ranking"))
    if (ranking == null || ranking == "null"){
        ranking = [];
    }

    elements = ["primer", "segon", "tercer"]
    for (let i = 0; i < ranking.length; i++) {
        nom = "#"+elements[i]+"Nom"
        punt = "#"+elements[i]+"Punts"
        $(nom).html(ranking[i].nom);
        $(punt).html(ranking[i].punts);
    }
}

// Inicializa el programa
var game;                // l'única variable global és el joc
$(document).ready(function () {
    game = new Game();  	   // Inicialitzem la instància del joc
    game.inicialitzar();   // estat inicial del joc
});


// Ejecuta el programa
function mainLoop() {
    // imprimirTop();
    game.update();
    game.draw();
    requestAnimationFrame(mainLoop);
}
