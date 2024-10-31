# Background Generator

Background Generator is a simple web application that allows users to generate gradient backgrounds and see real-time color changes. This project uses HTML, CSS, and JavaScript, along with Node and npm for dependency management.

## Features

- **Real-Time Gradient Generation**: Adjust two color selectors to create custom background gradients.
- **Live Preview**: As you choose colors, the gradient updates instantly on the screen.
- **CSS Code Display**: The CSS code for the generated gradient is displayed, making it easy to copy and use in other projects.

## Project Structure

- **index.html**: Main HTML file with the structure for the background generator interface.
- **style.css**: Stylesheet to style the generator layout and gradient.
- **script.js**: JavaScript to handle the color picker logic and update the background dynamically.
- **package.json** & **package-lock.json**: Node package files for managing dependencies.
- **bundle.js**: Bundled JavaScript file if using npm tools for building the project.

## Installation and Setup

1. **Clone the repository**:  
   ```bash
   git clone https://github.com/your-username/background-generator.git
   cd background-generator
   ```

2. **Install dependencies**:  
   ```bash
   npm install
   ```

3. **Run the application**:  
   Open `index.html` in your browser to use the Background Generator.

## Usage

1. **Choose Colors**: Use the color pickers to select two colors.
2. **View Gradient**: The background updates to show the gradient created by your chosen colors.
3. **Copy CSS**: The CSS code for the gradient is displayed below the generator. Copy it for use in other projects.

## Future Enhancements

- **Gradient Angle Control**: Add a slider to adjust the angle of the gradient.
- **Random Gradient Button**: Generate a random gradient with each click.
- **Save Presets**: Allow users to save favorite gradients for future use.
