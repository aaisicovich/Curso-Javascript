const express = require('express');
const app = express();
const path = require('path');
const port = 3000; // Choose the port number you want to use
const fs = require('fs');
const helmet = require('helmet');

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html');
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

app.use(express.static('public'))

// Set the MIME type for CSS files
app.get('/styles.css', (req, res) => {
  res.set('Content-Type', 'text/css');
  res.sendFile(path.join(__dirname, 'styles.css'));
});

// Set the MIME type for JavaScript files
app.get('/script/*.js', (req, res) => {
  res.set('Content-Type', 'application/javascript');
  res.sendFile(path.join(__dirname, req.path));
});

// Set the MIME type for JSON files
app.get('/data/*.json', (req, res) => {
  res.set('Content-Type', 'application/json');
  res.sendFile(path.join(__dirname, req.path));
});

app.use(helmet.contentSecurityPolicy({
  directives: {
    defaultSrc: ["'self'", "http://localhost:3000"],
    scriptSrc: ["'self'", "https://cdn.jsdelivr.net"],
    "img-src": [
      "'self'",
      "https://i.scdn.co/image/ab67616d0000b273ba5db46f4b838ef6027e6f96",
      "https://images.alphacoders.com/292/292333.jpg",
      "https://rare-gallery.com/uploads/posts/4572445-imagine-dragons.png"
    ]
  }
}));

// Serve static files from the 'classes' directory within the 'public' directory
app.use('/classes', express.static(path.join(__dirname, 'classes')));

// Serve static files from the 'controllers' directory within the 'public' directory
app.use('/controllers', express.static(path.join(__dirname, 'controllers')));

// Serve static files from the 'library' directory within the 'public' directory
app.use('/library', express.static(path.join(__dirname, 'library')));

// Serve static files from the 'pages' directory within the 'public' directory
app.use('/pages', express.static(path.join(__dirname, 'pages')));

// Serve static files from the 'script' directory within the 'public' directory
app.use('/script', express.static(path.join(__dirname, 'script')));

// Serve static files from the 'data' directory within the 'public' directory
app.use('/data', express.static(path.join(__dirname, 'data')));

// Serve static files from the 'img' directory within the 'public' directory
app.use('/img', express.static(path.join(__dirname, 'public', 'img')));

function updateJson(updatedData) {
  const path = './data/data.json';

  fs.readFile(path, 'utf8', (error, data) => {
    if (error) {
      console.error('Error leyendo el JSON', error);
      return;
    }


    try {
      const jsonData = JSON.parse(data);
      jsonData.eventos = updatedData.eventos;

      fs.writeFile(path, JSON.stringify(jsonData), 'utf8', (error) => {
        if (error) {
          console.error('Error escribiendo el JSON');
          return;
        }

        console.log('JSON actualizado correctamente');
      });
    } catch (error) {
      console.error('Error al parsear el JSON', error);
    }

  });
}

app.post('/updateEventos', (req, res) => {
  // Read request to get updateData
  let updatedData = '';
  req.on('data', chunk => {
    updatedData += chunk;
  });

  req.on('end', () => {
    // Llama al updateJSON
    try {
      const jsonData = JSON.parse(updatedData);
      updateJson(jsonData);
      res.sendStatus(200); // Send a success status back to the client
    } catch (error) {
      console.error('Error parsing JSON data:', error);
      res.sendStatus(500); // Send an error status back to the client
    }
  });
});