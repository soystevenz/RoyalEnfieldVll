import { PrismaClient } from '@prisma/client'
import { NextResponse } from 'next/server'

const prisma = new PrismaClient()

export async function POST(request) {
  try {
    const body = await request.json()
    const { nombre, apellido, correo, celular, ciudad } = body

    // Validar campos requeridos
    if (!nombre || !apellido || !correo || !celular || !ciudad) {
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

    // Crear el contacto
    const contact = await prisma.contact.create({
      data: {
        nombre,
        apellido,
        correo,
        celular,
        ciudad,
      },
    })

    return NextResponse.json({ 
      message: 'Contacto creado exitosamente',
      data: contact 
    }, { status: 201 })

  } catch (error) {
    console.error('Error:', error)
    return NextResponse.json(
      { 
        error: 'Error al procesar la solicitud',
        details: error.message 
      },
      { status: 500 }
    )
  } finally {
    await prisma.$disconnect()
  }
}
export async function DELETE(request) {
  try {
    const { id } = await request.json()
    const gallery = await prisma.gallery.delete({
      where: { id: parseInt(id) }
    })

    // Opcional: eliminar también el archivo físico
    try {
      const imagePath = path.join(process.cwd(), 'public', gallery.imagen)
      await unlink(imagePath)
    } catch (error) {
      console.error('Error al eliminar archivo físico:', error)
    }

    return NextResponse.json({ message: 'Imagen eliminada con éxito' })
  } catch (error) {
    console.error('Error al eliminar registro:', error)
    return NextResponse.json(
      { error: 'Error al eliminar la imagen' },
      { status: 500 }
    )
  }
}