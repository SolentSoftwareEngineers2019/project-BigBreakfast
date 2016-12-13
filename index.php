<!DOCTYPE html>
<html lang="en">

    <head>
        <title>Moji | Homepage</title>
        <meta charset="utf-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <link href="css/bootstrap.min.css" rel="stylesheet">
        <link href="css/main.css" rel="stylesheet">
    </head>

    <body>

        <nav class="navbar navbar-inverse">
            <div class="container-fluid">
                <div class="navbar-header">
                    <a class="navbar-brand" href="index.html">Moji</a>
                </div>
                <div id="navbar">
                    <ul class="nav navbar-nav navbar-right">
                        <li><a href="index.html">Home</a></li>
                        <li><a href="#login" data-toggle="modal" data-target="#login_window">Log-in</a></li>
                    </ul>
                </div>
                <form class="navbar-form navbar-right">
                    <input type="text" class="form-control" placeholder="Search...">
                </form>
            </div>
        </nav>
        
        <div class="container-fluid">
            <div class="row">
                <div class="sidebar col-md-2" id="sidebar">
                    <ul class="nav nav-sidebar">
                        <li><a href="#">link</a></li>
                        <li><a href="#">link</a></li>
                        <li><a href="#">link</a></li>
                    </ul>
                </div>
                <div class="main col-md-10">
                    <p>[content]</p>
                </div>
            </div>
        </div>
        
        <!-- LOGIN MODAL WINDOW -->
        <div id="login_window" class="modal fade">
            <div class="modal-dialog">
                <div class="modal-content">
                    <div class="modal-header">
                        <button type="button" class="close" data-dismiss="modal">&times;</button>
                        <h4 class="modal-title">Log-in</h4>
                    </div>
                    <div class="modal-body">
                        <form id="login">
                            <div class="form-group">
                                <input class="form-control" type="text" id="username" placeholder="Username">
                            </div>
                            <div class="form-group">
                                <input class="form-control" type="password" id="password" placeholder="Password">
                            </div>
                            <input type="submit" class="btn btn-default" value="Log-in">
                            <button type="button" class="btn btn-default right" data-dismiss="modal">Cancel</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
        
        <!-- jQuery (necessary for Bootstrap's JavaScript plugins) -->
        <script src="https://ajax.googleapis.com/ajax/libs/jquery/1.12.4/jquery.min.js"></script>
        <script src="js/bootstrap.min.js"></script>

    </body>

</html>