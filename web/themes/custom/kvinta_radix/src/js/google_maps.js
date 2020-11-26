// import 'popper.js';
// import 'bootstrap';

(function ($, Drupal) {

        Drupal.behaviors.google_maps = {
            attach: function (context) {




                // let options = {
                //     center:{lat: 50.448627, lng: -30.482510},
                //     zoom:14
                // }

                // let map = new google.maps.Map(docement.getElementById("map").options);




                $(function () { // если добавить, то карта не грузится


                var map;
                var myCenter = new google.maps.LatLng(50.442168, 30.520281);
                var myPosition1 = new google.maps.LatLng(50.442168, 30.520281);
                var MY_MAPTYPE_ID = 'custom_style';



                function initialize() {
                    var featureOpts = [{"featureType": "all", "stylers": [{"saturation": -100}, {"gamma": 0.5}]}];
                    var mapProp = {
                        center: myCenter,
                        zoom: 12,
                        scrollwheel: false,
                        mapTypeControlOptions: {
                            mapTypeIds: [google.maps.MapTypeId.ROADMAP, google.maps.MapTypeId.HYBRID, MY_MAPTYPE_ID]
                        },
                        mapTypeId: google.maps.MapTypeId.ROADMAP
                    };



                    const flightPlanCoordinates = [

                        { lat: 50.442921, lng: 30.515679 },
                        { lat: 50.443441, lng: 30.512152 },
                        { lat:  50.444455, lng:  30.506216 },

                      ];

                      const flightPath = new google.maps.Polyline({
                        path: flightPlanCoordinates,
                        geodesic: true,
                        strokeColor: "#FF0000",
                        strokeOpacity: 1.0,
                        strokeWeight: 2
                      });



                    var map = new google.maps.Map(document.getElementById("map"), mapProp);
                    var styledMapOptions = {name: 'GrayScale'};
                    var customMapType = new google.maps.StyledMapType(featureOpts, styledMapOptions);
                    map.mapTypes.set(MY_MAPTYPE_ID, customMapType);

                    var image = '../../themes/custom/kvinta_radix/default_images/fotogallery/004-loupe.png'
                    var marker1 = new google.maps.Marker({
                        position: myPosition1, label: 'O',
                        draggable: true,
                        icon: image,
                    });

                    var infoCont1 = '<div class="map-info" style="min-height: 60px; min-width: 240px;"><div><strong>Company office</strong></div><div>Hauptmarkt Nürnberg, 90403 Nürnberg, Germany</div></div>';
                    var infowindow1 = new google.maps.InfoWindow({content: infoCont1});
                    google.maps.event.addListener(marker1, 'click', function () {
                        infowindow1.open(map, marker1);
                    });


                    marker1.setMap(map);
                    flightPath.setMap(map);
                }


                google.maps.event.addDomListener(window, 'load', initialize);

            });


            }
        };


})(jQuery, Drupal);
