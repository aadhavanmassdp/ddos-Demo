<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>AN MACHINE LEARNING AND BLOCK CHAIN WITH OPTIMAL MINER SELECTION FOR RELIABLE DDOS ATTACK DETECTION</title>
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css">
    <style>
        body {
            background-color: #f8f9fa;
        }
        .container {
            margin-top: 100px;
            text-align: center;
        }
        .alert {
            display: none;
        }
    </style>
</head>
<body>
    <div class="container">
        <h1>AN MACHINE LEARNING AND BLOCK CHAIN WITH OPTIMAL MINER SELECTION FOR RELIABLE DDOS ATTACK DETECTION</h1>
        <input type="file" id="fileInput" class="form-control-file mb-3">
        <button id="uploadBtn" class="btn btn-primary">Upload CSV</button>
        <div id="result" class="alert alert-info mt-3"></div>
    </div>

    <script>
        document.getElementById('uploadBtn').addEventListener('click', function() {
            const fileInput = document.getElementById('fileInput');
            if (fileInput.files.length === 0) {
                alert('Please upload a CSV file.');
                return;
            }
            // Simulate analysis
            const damageLevel = Math.random() * 100;
            let message = '';
            if (damageLevel > 80) {
                message = '100% attacked';
            } else if (damageLevel > 50) {
                message = 'Remote attack happened';
            } else if (damageLevel > 30) {
                message = 'Probability of remote to server attack';
            } else {
                message = 'User to root attack happened';
            }
            const resultDiv = document.getElementById('result');
            resultDiv.textContent = message;
            resultDiv.classList.remove('d-none');
            resultDiv.style.display = 'block';
        });
    </script>
</body>
</html>
