🎨 Canvas Image Editor

A lightweight and interactive browser-based image editor built using Vanilla JavaScript and the HTML5 Canvas API.

This application allows users to upload an image, apply real-time filters, use preset effects, reset adjustments, and download the edited image — all without any external libraries.

🚀 Features

📤 Upload image from local device

🎚️ Real-time filter adjustments using sliders

🎨 Multiple built-in preset effects

🔄 Reset filters to default values

💾 Download edited image as PNG

⚡ Instant preview using canvasCtx.filter

🛠️ Tech Stack

HTML5

CSS3

JavaScript (Vanilla JS)

HTML5 Canvas API

🎛️ Available Filters

The editor dynamically generates sliders for the following filters:

Filter	Range	Unit
Brightness	0 – 200	%
Contrast	0 – 200	%
Saturation	0 – 200	%
Hue Rotation	0 – 360	deg
Blur	0 – 20	px
Grayscale	0 – 100	%
Sepia	0 – 100	%
Opacity	0 – 100	%
Invert	0 – 100	%

All filters are applied using the Canvas filter property.

🎨 Preset Effects

The project includes professionally designed presets such as:

Night Vision

Portrait Pop

Warm Vintage

Frosty

Documentary

Vibrant Boost

Matte Dark

Cinematic

Golden Hour

Black & White Pro

Soft Glow

Moody Dark

Retro Film

Cool Ice

High Energy

Neon Cyber

Desert Fade

Each preset updates all filter values instantly and applies them to the canvas.

📂 Project Structure
📁 project-folder
 ├── index.html
 ├── style.css
 └── script.js
⚙️ How It Works
1️⃣ Filter Configuration

All filters are stored inside a centralized filters object:

let filters = {
  brightness: { value: 100, min: 0, max: 200, unit: "%" },
  contrast: { value: 100, min: 0, max: 200, unit: "%" },
  ...
}

This makes the system scalable and easy to extend.

2️⃣ Dynamic Filter UI Creation

Filters are generated dynamically using:

createFilterElement()
createFilters()

This avoids hardcoding sliders in HTML.

3️⃣ Applying Filters

Filters are applied using:

canvasCtx.filter = `
 brightness(...)
 contrast(...)
 saturate(...)
 ...
`;

Then the image is redrawn:

canvasCtx.drawImage(image, 0, 0);
4️⃣ Reset Functionality

The reset button:

Restores default filter values

Rebuilds slider UI

Reapplies filters

5️⃣ Download Image

The edited image is downloaded using:

imageCanvas.toDataURL()
💡 Key Learning Concepts

DOM Manipulation

Event Handling

Dynamic UI generation

Canvas Rendering

State Management using Objects

Real-time Image Processing

📌 Possible Improvements

Add crop & rotate functionality

Add undo/redo history

Add image zoom controls

Save presets to localStorage

Drag & Drop image upload

Dark mode UI

📸 How To Run

Clone the repository

Open index.html in your browser

Upload an image

Start editing 🎉