# QR Code Microservice

This microservice provides functionality to generate QR codes, redirect users upon scanning the QR code, and track the number of scans.

## Features

1. **QR Code Generation**: Generates a QR code that redirects users to a specific URL.
2. **Redirection**: Handles redirection upon QR code scan.
3. **Scan Count**: Tracks the number of times the QR code has been scanned.

## Endpoints

### 1. Generate QR Code
- **URL**: `/generate-qr`
- **Method**: `GET`
- **Description**: Generates a QR code and displays it on a web page.
- **Response**: A page containing the QR code.

### 2. QR Code Redirection
- **URL**: `/scan-qr`
- **Method**: `GET`
- **Description**: Redirects the user to a predefined URL and increments the scan count.
- **Response**: Redirects to `https://example.com`.

### 3. Get Scan Count
- **URL**: `/scan-count`
- **Method**: `GET`
- **Description**: Returns the total number of scans.
- **Response**: JSON object with the scan count.

  ```json
  {
      "scanCount": 5
  }
  ```

## Installation

1. Clone the repository:
   ```bash
   git clone <repository_url>
   cd <repository_name>
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start the server:
   ```bash
   node app.js
   ```

## Usage

1. Open a browser and visit `http://localhost:3333/generate-qr` to generate and view the QR code.
2. Scan the QR code using a mobile device or QR code scanner.
3. Visit `http://localhost:3333/scan-count` to see the total number of scans.

## Dependencies

- `express`: Web framework for Node.js
- `qrcode`: Library for generating QR codes

## Customization

- Update the redirection URL in the `/scan-qr` route:
  ```javascript
  res.redirect('https://example.com');
  ```
  Replace `https://example.com` with your desired URL.

## License

This project is licensed under the MIT License.
