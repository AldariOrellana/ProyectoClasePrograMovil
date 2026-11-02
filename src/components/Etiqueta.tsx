
import { StyleSheet, Text, View } from 'react-native';

type EtiquetaProps = {
  texto: string;
  colorFondo: string;
};

export default function Etiqueta({
  texto,
  colorFondo,
}: EtiquetaProps) {
  return (
    <View
      style={[
        estilos.etiqueta,
        { backgroundColor: colorFondo },
      ]}
    >
      <Text style={estilos.texto}>{texto}</Text>
    </View>
  );
}

const estilos = StyleSheet.create({
  etiqueta: {
    alignSelf: 'flex-start',
    borderRadius: 100,
    paddingHorizontal: 12,
    paddingVertical: 6,
    alignItems: 'center',
    justifyContent: 'center',
  },
  texto: {
    fontSize: 10,
    fontWeight: '700',
    color: '#FFFFFF',
    textTransform: 'uppercase',
    letterSpacing: 0.5,
    textAlign: 'center',
  },
});
