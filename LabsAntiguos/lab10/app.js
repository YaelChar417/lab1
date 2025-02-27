// Dirigir al usuario a una pagina web
const http = require('http');
const html_header = `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <h1>Holaaaaaaaaaaaaa</h1>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero, similique consectetur quis dignissimos repellat non doloribus eum omnis minima eos explicabo tenetur vitae, iste excepturi et eveniet repellendus ratione nesciunt.</p>`;

const html_ornato = `<img width="300px" src="https://arqin.pe/wp-content/uploads/2023/04/creative-composition-of-botanic-home-interior-desi-2022-12-07-04-25-48-utc-1.jpg"><form action="/ornato/agregar" method="POST">
    <label for="nombreDeco">Nombre de la planta decorativa</label>
    <input id="nombreDeco" type="text" placeholder="Bugambilia" name="nombreDeco">
    <input type="submit" value="Enviar">
    </form>
</body>`;
//Lo que hace el for de label es que al hacer click te manda al input correspondiente
//la etiqueta name hace que al mandar los datos a un servidor lleguen con ese valor, generalmente se pone name e id iguales

const html_comestible = `<img width="300px" src="https://cdn0.uncomo.com/es/posts/2/0/4/las_verduras_de_primavera_53402_300_150.jpg">
    <form action="/comestible/agregar" method="POST">
        <label for="nombreCome">Nombre de una planta comestible</label>
        <input id="nombreCome" type="text" placeholder="Jitomate" name="nombreCome">
        <input type="submit" value="Enviar">
    </form>
</body>`;

const html_landing = `<img width="1000px" src="https://i.gifer.com/8KQ5.gif">
    <h2>Estas en la sección de inicio, se bienvenido</h2>
    <p>Esta pagina fue hecha con mucho amor a las plantas <3</p>
    <p>Mi planta favorita es el girasol</p>
    <p>Para ver más funcionalidades usa las rutas <strong>/comestible - /ornato</strong></p>
    <img width="200px" src="https://cdn.pixabay.com/animation/2024/03/04/16/52/16-52-07-671_512.gif">
</body>`

const html_footer = `<footer>
<p>pagina hecha por Yael Charles Marin</p>
<p>Construccion de software</p>
</footer></html>`;



const plantas_decorativas = [];
const plantas_comestibles = [];
const server = http.createServer((req, res) => {
    if(req.method == "GET" && (req.url == "/ornato/agregar" || req.url == "/ornato"))
    {
        console.log(req.url);
        res.setHeader('Content-Type', 'text/html');
        res.write(html_header + html_ornato + html_footer);
        res.end();
    }else if(req.method == "POST" && req.url == "/ornato/agregar")
    {
        const datos_completos = [];

        req.on('data', (data)=>{
            console.log(data);
            datos_completos.push(data);
        });

        req.on('end', () =>{
            const string_datos_completos = Buffer.concat(datos_completos).toString();
            const planta_name = string_datos_completos.split('=')[1]; 
            console.log(planta_name);

            plantas_decorativas.push(planta_name);
            res.setHeader('Content-Type', 'text/html');
            res.write(html_header);

            for(const planta of plantas_decorativas)
            {
                res.write(`<div>`);
                res.write(planta);
                res.write(`</div>`);
            }
            res.write(html_footer);
            res.end();
        });
    }else if (req.method == "GET" && (req.url == '/comestible/agregar') || req.url == '/comestible')
    {
        res.setHeader('Content-Type', 'text/html');
        res.write(html_header + html_comestible + html_footer);
        res.end();
    }else if(req.method == "POST" && req.url == "/comestible/agregar")
    {
        const datos_completos = [];

        req.on('data', (data)=>{
            datos_completos.push(data);
        });

        req.on('end', () =>{
            const string_datos_completos = Buffer.concat(datos_completos).toString();
            const planta_name = string_datos_completos.split('=')[1]; 
            console.log(planta_name);

            plantas_comestibles.push(planta_name);
            res.setHeader('Content-Type', 'text/html');
            res.write(html_header);

            for(const planta of plantas_comestibles)
            {
                res.write(`<div>`);
                res.write(planta);
                res.write(`</div>`);
            }
            res.write(html_footer);
            res.end();
        });
    } else if(req.method == "GET" && (req.url == '/inicio' || req.url == '/'))
    {
        res.setHeader('Content-Type', 'text/html');
        res.write(html_header + html_landing + html_footer)
        res.end();
    }else
    {
        res.statusCode = 404;
        res.setHeader('Content-Type', 'text/html');
        res.write(html_header);
        res.write(`<h1>Esta pagina no existe</h1>`)
        res.write(`<img width="400px" src="https://media.tenor.com/WU_r--BFSWUAAAAM/404-404error.gif">`);
        res.write(html_footer)
        res.end();
    }
    
});

server.listen(3000);