
import { StyleSheet, Text, View } from 'react-native';
import Etiqueta from './Etiqueta';

type TarjetaEjercicioProps = {
  nombre: string;
  series: number;
  repeticiones: number;
  grupoMuscular: string;
  destacado?: boolean;
};

export default function TarjetaEjercicio({
  nombre,
  series,
  repeticiones,
  grupoMuscular,
  destacado = false,
}: TarjetaEjercicioProps) {
  return (
    <View
      style={[
        estilos.tarjeta,
        destacado && estilos.tarjetaDestacada,
      ]}
    >
      <View style={estilos.filaSuperior}>
        <Text style={estilos.nombre}>{nombre}</Text>

        <Etiqueta
          texto={grupoMuscular}
          colorFondo={destacado ? '#2463EB' : '#64748B'}
        />
      </View>

      <Text style={estilos.detalle}>
        {series} series × {repeticiones} repeticiones
      </Text>

      {destacado && (
        <Text style={estilos.textoDestacado}>
          EJERCICIO DESTACADO
        </Text>
      )}
    </View>
  );
}

const estilos = StyleSheet.create({
  tarjeta: {
    backgroundColor: '#FFFFFF',
    borderRadius: 16,
    borderWidth: 1,
    borderColor: '#E6EBF2',
    padding: 18,
    marginBottom: 12,
  },
  tarjetaDestacada: {
    backgroundColor: '#EFF6FF',
    borderColor: '#2463EB',
    borderWidth: 2,
  },
  filaSuperior: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    gap: 10,
    marginBottom: 12,
  },
  nombre: {
    flex: 1,
    fontSize: 16,
    fontWeight: '700',
    color: '#17233B',
  },
  detalle: {
    fontSize: 13,
    fontWeight: '400',
    color: '#718096',
    lineHeight: 20,
  },
  textoDestacado: {
    fontSize: 10,
    fontWeight: '700',
    color: '#2463EB',
    textTransform: 'uppercase',
    letterSpacing: 0.8,
    marginTop: 12,
  },
});
