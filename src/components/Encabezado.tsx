
import { StyleSheet, Text, View } from 'react-native';

type EncabezadoProps = {
  titulo: string;
  subtitulo: string;
};

export default function Encabezado({
  titulo,
  subtitulo,
}: EncabezadoProps) {
  return (
    <View style={estilos.contenedor}>
      <Text style={estilos.titulo}>{titulo}</Text>
      <Text style={estilos.subtitulo}>{subtitulo}</Text>
    </View>
  );
}

const estilos = StyleSheet.create({
  contenedor: {
    marginBottom: 28,
  },
  titulo: {
    fontSize: 30,
    fontWeight: '700',
    color: '#17233B',
    letterSpacing: -0.5,
    marginBottom: 8,
  },
  subtitulo: {
    fontSize: 15,
    fontWeight: '400',
    color: '#718096',
    lineHeight: 22,
  },
});
