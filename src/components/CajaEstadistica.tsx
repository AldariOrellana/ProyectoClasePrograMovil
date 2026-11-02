
import { StyleSheet, Text, View } from 'react-native';

type CajaEstadisticaProps = {
  valor: string;
  etiqueta: string;
};

export default function CajaEstadistica({
  valor,
  etiqueta,
}: CajaEstadisticaProps) {
  return (
    <View style={estilos.contenedor}>
      <Text style={estilos.valor}>{valor}</Text>
      <Text style={estilos.etiqueta}>{etiqueta}</Text>
    </View>
  );
}

const estilos = StyleSheet.create({
  contenedor: {
    flex: 1,
    minWidth: 0,
    backgroundColor: '#FFFFFF',
    borderRadius: 16,
    borderWidth: 1,
    borderColor: '#E6EBF2',
    paddingHorizontal: 8,
    paddingVertical: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  valor: {
    fontSize: 26,
    fontWeight: '700',
    color: '#2463EB',
    textAlign: 'center',
    marginBottom: 6,
  },
  etiqueta: {
    fontSize: 12,
    fontWeight: '500',
    color: '#718096',
    textAlign: 'center',
  },
});
