< !DOCTYPE html >
    <html>
        <head>
            <meta charset="utf-8">
                <meta http-equiv="X-UA-Compatible" content="IE=edge">
                    <meta name="viewport" content="width=device-width, initial-scale=1">
                        <meta name="author" content="Carlos Arias from Getbootstrap.com">
                            <title>Express Form Example</title>
                            <link href="http://leia.cs.spu.edu/bootstrap/css/bootstrap.min.css" rel="stylesheet">
</head>
                            <body>
                                <h1>Testing a Form with Express</h1>
                                <div class="container">
                                    <form action="process_get" method="GET">
                                        <div class="form-group">
                                            <label for="firstName">First Name:</label>
                                            <input type="text" class="form-control" id="firstName" name="firstName">
            </div>
                                            <div class="form-group">
                                                <label for="lastName">Last Name:</label>
                                                <input type="text" class="form-control" id="lastName" name="lastName">
            </div>
                                                <div class="form-group">
                                                    <input type="submit" value="Submit">
            </div>
        </form>
                                            </div>
                                            <h3>This is just random text</h3>
</body>
</html>
