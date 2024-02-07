import {Image, Text, TouchableOpacity, View} from 'react-native';
import React, {Fragment} from 'react';
import {globalStyles} from '../../../style';
import MapView, {
  Callout,
  Circle,
  LatLng,
  Marker,
  Polygon,
  Polyline,
} from 'react-native-maps';
import styles from './Profile.style';
import useFetch from '../../../hooks/useFetch';
import {mapService} from '../../../services';
import axios from 'axios';
import {requestLocationPermission} from '../../../utils';
import Geolocation from 'react-native-geolocation-service';

import {launchCamera, launchImageLibrary} from 'react-native-image-picker';

import DocumentPicker from 'react-native-document-picker';

import {Button, Card} from 'rn-marport-ui/src';

const Profile = () => {
  // const ref = React.useRef<MapView>(null);

  // const [line, setLine] = React.useState<LatLng[]>([]);

  // const [location, setLocation] = React.useState<any>();

  // const {data, status} = useFetch({
  //   service: mapService.getStores,
  //   filter: {id: 8456, city: 'ankara'},
  //   responseKey: 'data.data',
  // });

  // React.useEffect(() => {
  //   const permission = false;
  //   // requestLocationPermission();
  //   if (permission) {
  //     // getLocation();
  //     axios
  //       .get(
  //         'https://api.openrouteservice.org/v2/directions/driving-car?api_key=5b3ce3597851110001cf6248610d1b745e9b4590be73354c49ce4b4b&start=8.681495,49.41461&end=8.687872,49.420318',
  //       )
  //       .then(res => {
  //         res?.data.features?.[0]?.geometry?.coordinates?.map(x => {
  //           let obj: LatLng = {latitude: x?.[0], longitude: x?.[1]};
  //           setLine(line => [...line, obj]);
  //         });
  //       })
  //       .catch(err => {
  //         console.log(err);
  //       });
  //   }
  // }, []);

  // const getLocation = () => {
  //   const result = requestLocationPermission();
  //   result.then(res => {
  //     console.log('res is:', res);
  //     if (res) {
  //       Geolocation.getCurrentPosition(
  //         position => {
  //           console.log(position);
  //           setLocation(position);
  //         },
  //         error => {
  //           // See error code charts below.
  //           console.log(error.code, error.message);
  //           setLocation(false);
  //         },
  //         {enableHighAccuracy: true, timeout: 15000, maximumAge: 10000},
  //       );
  //     }
  //   });
  //   console.log(location);
  // };

  const [img, setImg] = React.useState<any>();

  const openCamera = () => {
    launchCamera({mediaType: 'photo'})
      .then(res => {
        if (res.assets?.[0]) {
          const {fileName, uri, fileSize, type} = res.assets?.[0];
          let obj = {
            uri, //: uri.replace('file://', ''),
            name: fileName,
            size: fileSize,
            type,
          };
          console.log(obj);
          setImg(uri);

          var formData = new FormData();
          formData.append('file', JSON.stringify(obj));
        }
      })
      .catch(console.log);
  };

  const openImageLibrary = async () => {
    try {
      const result = await launchImageLibrary({
        mediaType: 'mixed',
        selectionLimit: 4,
      });
      if (result.assets?.[0]) {
        const {fileName, uri, fileSize, type} = result.assets?.[0];

        let obj = {
          uri, //: uri.replace('file://', ''),
          name: fileName,
          size: fileSize,
          type,
        };

        setImg(uri);
        console.log(obj);

        var formData = new FormData();
        formData.append('file', JSON.stringify(obj));
      }
    } catch (err) {
      console.log(err);
    }
  };

  const openLibrary = () => {
    DocumentPicker.pick()
      .then(res => {
        if (res?.[0]) {
          const {name, uri, size, type} = res?.[0];

          let obj = {
            uri, //: uri.replace('file://', ''),
            name,
            size,
            type,
          };

          setImg(uri);
          console.log(obj);

          var formData = new FormData();
          formData.append('file', JSON.stringify(obj));
        }
      })
      .catch(console.log);
  };

  return (
    <View style={[globalStyles.container, styles.container]}>
      {/* <MapView
        {...{
          ref,
          style: styles.map,
          initialRegion: {
            latitude: 40.00652792132574,
            longitude: 32.694232032016274,
            latitudeDelta: 0.05,
            longitudeDelta: 0.05,
          },
          showsTraffic: true,
          showsCompass: true,
          showsUserLocation: true, // TODO: Google Maps ile beraber bakılacak
        }}>
        {data.map((location: any) => {
          return (
            <Marker
              {...{
                coordinate: {
                  latitude: location?.latitude,
                  longitude: location?.longitude,
                },
                title: location?.name,
                description: location?.website ?? 'İnternet sitesi yok', //TODO: Google maps
              }}>
              <Callout tooltip>
                <Fragment>
                  <View
                    style={{
                      width: 200,
                      borderWidth: 1,
                      backgroundColor: 'red',
                    }}>
                    <Text>Adrese git</Text>
                  </View>
                </Fragment>
              </Callout>
            </Marker>
          );
        })}

        {line && (
          <Polyline
            {...{coordinates: line, strokeWidth: 20, strokeColor: 'red'}} //TODO: kontrol
          />
        )}
        <Polygon
          coordinates={[
            {
              latitude: 39.99046050192119,
              longitude: 32.65930590042568,
            },
            {
              latitude: 39.99036663354372,
              longitude: 32.66100075018034,
            },
            {
              latitude: 39.98930799791118,
              longitude: 32.660823777916804,
            },
            {
              latitude: 39.98941229771689,
              longitude: 32.659217414293906,
            },
          ]}
          strokeColor="blue"
          strokeWidth={2}
          fillColor="red"
        />
        <Circle
          {...{
            center: {
              longitude: 39.98941229771689,
              latitude: 32.659217414293906,
            },
            radius: 20,
            strokeWidth: 20,
            fillColor: 'blue',
            strokeColor: 'red',
          }}
        />
      </MapView> */}

      <Image source={{uri: img}} style={{width: 60, height: 60}} />

      <TouchableOpacity onPress={openCamera}>
        <Text>Kamerayı Aç</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={openImageLibrary}>
        <Text>Galeriyi Aç</Text>
      </TouchableOpacity>

      <Card>
        <Button />
      </Card>
      <Card>
        <TouchableOpacity onPress={openLibrary}>
          <Text>Dosyaları Aç</Text>
        </TouchableOpacity>
      </Card>
    </View>
  );
};

export default Profile;
