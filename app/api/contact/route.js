import { PrismaClient } from '@prisma/client'
import { NextResponse } from 'next/server'

// Mejor práctica: crear una instancia única de PrismaClient
const prisma = new PrismaClient()

export async function POST(request) {
  try {
    const body = await request.json()
    console.log('Datos recibidos:', body) // Log para debugging

    const { nombre, apellido, correo, celular, ciudad } = body

    // Validación más detallada
    if (!nombre || !apellido || !correo || !celular || !ciudad) {
      console.log('Faltan campos requeridos') // Log para debugging
      return NextResponse.json(
        { 
          error: 'Todos los campos son requeridos',
          missingFields: {
            nombre: !nombre,
            apellido: !apellido,
            correo: !correo,
            celular: !celular,
            ciudad: !ciudad
          }
        },
        { status: 400 }
      )
    }

    // Intentar crear el contacto
    const contact = await prisma.contact.create({
      data: {
        nombre,
        apellido,
        correo,
        celular,
        ciudad,
      },
    })

    console.log('Contacto creado:', contact) // Log para debugging

    return NextResponse.json({ 
      message: 'Contacto creado exitosamente',
      data: contact 
    }, { status: 201 })

  } catch (error) {
    console.error('Error en el servidor:', error) // Log para debugging
    return NextResponse.json(
      { 
        error: 'Error al procesar la solicitud',
        details: error.message 
      },
      { status: 500 }
    )
  } finally {
    // Desconectar Prisma
    await prisma.$disconnect()
  }
}