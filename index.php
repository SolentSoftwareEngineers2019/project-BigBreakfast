<!DOCTYPE html>
<html lang="en">

    <head>
        <title>ProjectBigBreakfast</title>
        <meta charset="utf-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <link href="css/bootstrap.css" rel="stylesheet">
        <link href="css/main.css" rel="stylesheet">
    </head>

    <body>

        <div id="wrapper" expanded-left="false" expanded-right="false">
            
            <!--NAVBAR-->
            <nav id="navbar" class="navbar navbar-inverse navbar-fixed-top device-fixed-height">
                <div class="container-fluid">
                    <div class="navbar-header">
                        <div  class="navbar-brand">
                            <a href="#" class="menu-toggle nav navbar-nav glyphicon glyphicon-align-justify btn-menu toggle" data-toggle="collapse-slide-left" data-target="#sidebar-left-wrapper" aria-expanded="true">
                                <i class="fa fa-bars"></i>
                            </a>
                            <a id="title" href="#">ProjectBigBreakfast</a>
                        </div> <!-- /navbar-brand -->
                        <a href="#" class="menu-toggle nav navbar-nav glyphicon glyphicon-align-justify btn-menu toggle navbar-brand navbar-right" data-toggle="collapse-slide-right" data-target="#sidebar-right-wrapper">
                            <i class="fa fa-bars"></i>
                        </a>
                    </div> <!-- /navbar-header -->
                </div> <!-- /container-fluid -->
            </nav><!-- /navbar -->

            <!--LEFT SIDEBAR-->
            <div id="sidebar-left-wrapper" aria-expanded="true">
                <div id="userprofile">
                    <p><?php echo $userUsername; ?></p>
                    <ul class="nav">
                        <li>Posts: <?php echo $userPosts; ?></li>
                        <li>Likes: <?php echo $userLikes; ?></li>
                        <li>Followers: <?php echo $userFollowers; ?></li>
                        <li>Following: <?php echo $userFollowing; ?></li>
                    </ul>
                </div><!-- /userprofile -->
                <div id="trendingwords">
                    <h3>Trending words:</h3>
                    <ol>
                        <li><?php echo $word1; ?></li>
                        <li><?php echo $word2; ?></li>
                        <li><?php echo $word3; ?></li>
                        <li><?php echo $word4; ?></li>
                        <li><?php echo $word5; ?></li>
                        <li><?php echo $word6; ?></li>
                        <li><?php echo $word7; ?></li>
                        <li><?php echo $word8; ?></li>
                        <li><?php echo $word9; ?></li>
                        <li><?php echo $word10; ?></li>
                    </ol>
                </div><!-- /trendingwords -->
            </div><!-- /sidebar-left-wrapper -->
            
            <!--PAGE CONTENT-->
            <div id="page-content-wrapper">
                <div class="jumbotron">
                    <div class="container-fluid">
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                        </p>
                    </div><!-- /container-fluid -->
                </div> <!-- page-content -->
            </div><!-- /page-content-wrapper -->
            
            <!--RIGHT SIDEBAR-->
            <div id="sidebar-right-wrapper" class="float-right" aria-expanded="true">
                <div id="previewprofile">
                    <p><?php echo $previewUsername; ?></p>
                    <ul class="nav">
                        <li>Posts: <?php echo $previewPosts; ?></li>
                        <li>Likes: <?php echo $previewLikes; ?></li>
                        <li>Followers: <?php echo $previewFollwers; ?></li>
                        <li>Following: <?php echo $previewFollowing; ?></li>
                    </ul>
                </div><!-- /previewprofile -->
                <div id="previewposts">
                    <h3>Posts:</h3>
                </div><!-- /previewprofile -->
            </div><!-- /sidebar-left-wrapper -->
            
        </div><!-- /wrapper -->
        
        <!-- LOGIN MODAL WINDOW -->
        <div id="login-window" class="modal fade">
            <div class="modal-dialog">
                <div class="modal-content">
                    <div class="modal-header">
                        <button type="button" class="close" data-dismiss="modal">&times;</button>
                        <h4 class="modal-title">Log-in</h4>
                    </div><!-- /.modal-header -->
                    <div class="modal-body">
                        <p>Need an account? <button type="button" class="btn btn-default btn-sm" data-dismiss="modal" data-toggle="modal" data-target="#registration-window">Register</button></p>
                        <form id="login-form" action="php/connection.php" method="post">
                            <div class="form-group">
                                <input class="form-control" type="text" name="username" placeholder="Username">
                            </div><!-- /.form-group -->
                            <div class="form-group">
                                <input class="form-control" type="password" name="password" placeholder="Password">
                            </div><!-- /.form-group -->
                            <input type="submit" class="btn btn-default" value="Log-in">
                            <button type="button" class="btn btn-default right" data-dismiss="modal">Cancel</button>
                        </form><!-- /#login-form -->
                    </div><!-- /.modal-body -->
                </div><!-- /.modal-content -->
            </div><!-- /.modal-content -->
        </div><!-- /#login-window -->
        
        <!--REGISTRATION MODAL WINDOW-->
        <div id="registration-window" class="modal fade">
            <div class="modal-dialogue">
                <div class="modal-content">
                    <div class="modal-header">
                        <button type="button" class="close" data-dismiss="modal">&times;</button>
                        <h4 class="modal-title">Register</h4>
                    </div><!--/.modal-header-->
                    <div class="modal-body">
                        <form action="" id="register-form">
                            <div class="form-group">
                                <input type="text" class="form-control" name="username" placeholder="Username">
                                <input type="text" class="form-control" name="first_name" placeholder="First Name">
                                <input type="text" class="form-control" name="last_name" placeholder="Last Name">
                                <input type="email" class="form-control" name="email" placeholder="Email">
                            </div><!--/.form-group-->
                            <div class="form-group">
                                <input type="password" class="form-control" name="password" placeholder="Password">
                                <input type="password" class="form-control" name="password-repeat" placeholder="Repeat Password">
                            </div><!--/.form-group-->
                            <input type="button" class="btn btn-default" value="Register">
                            <button type="button" class="btn btn-default right" data-dismiss="modal"> Cancel</button>
                        </form><!--/#register-form-->
                    </div><!--/.modal-body-->
                </div><!--/.modal-content-->
            </div><!--/.modal-dialogue-->
        </div><!--/#registration-window-->

        <script src="https://ajax.googleapis.com/ajax/libs/jquery/1.12.4/jquery.min.js"></script>
        <script src="https://use.fontawesome.com/e0490efbcf.js"></script>
        <script src="js/bootstrap.js"></script>
        <script src="js/homepage.js"></script>

    </body>

</html>
