
import {
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';

import Encabezado from './src/components/Encabezado';
import CajaEstadistica from './src/components/CajaEstadistica';
import TarjetaEjercicio from './src/components/TarjetaEjercicio';

export default function App() {
  return (
    <View style={estilos.pantalla}>
      <ScrollView
        style={estilos.scroll}
        contentContainerStyle={estilos.contenido}
      >
        <Encabezado
          titulo="Mi rutina de hoy"
          subtitulo="Lunes · Tren superior"
        />

        <View style={estilos.filaEstadisticas}>
          <CajaEstadistica
            valor="4"
            etiqueta="Ejercicios"
          />

          <CajaEstadistica
            valor="45"
            etiqueta="Minutos"
          />

          <CajaEstadistica
            valor="320"
            etiqueta="Kcal"
          />
        </View>

        <View style={estilos.seccion}>
          <Text style={estilos.tituloSeccion}>
            Ejercicios
          </Text>

          <Text style={estilos.descripcionSeccion}>
            Completa los ejercicios de tu rutina.
          </Text>
        </View>

        <TarjetaEjercicio
          nombre="Press de banca"
          series={4}
          repeticiones={10}
          grupoMuscular="pecho"
        />

        <TarjetaEjercicio
          nombre="Remo con barra"
          series={4}
          repeticiones={12}
          grupoMuscular="espalda"
          destacado={true}
        />

        <TarjetaEjercicio
          nombre="Press militar"
          series={3}
          repeticiones={12}
          grupoMuscular="hombros"
        />

        <TarjetaEjercicio
          nombre="Curl de bíceps"
          series={3}
          repeticiones={15}
          grupoMuscular="biceps"
        />
      </ScrollView>
    </View>
  );
}

const estilos = StyleSheet.create({
  pantalla: {
    flex: 1,
    backgroundColor: '#F5F7FB',
    paddingTop: 64,
  },
  scroll: {
    flex: 1,
  },
  contenido: {
    paddingHorizontal: 20,
    paddingBottom: 36,
  },
  filaEstadisticas: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'stretch',
    gap: 10,
    marginBottom: 32,
  },
  seccion: {
    marginBottom: 18,
  },
  tituloSeccion: {
    fontSize: 21,
    fontWeight: '700',
    color: '#17233B',
    marginBottom: 6,
  },
  descripcionSeccion: {
    fontSize: 13,
    fontWeight: '400',
    color: '#718096',
  },
});
