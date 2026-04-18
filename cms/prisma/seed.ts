import { prisma } from '@/lib/db'
import bcrypt from 'bcryptjs'

async function main() {
  // Create admin user
  const hashedPassword = await bcrypt.hash('changeme123', 10)

  const adminUser = await prisma.user.upsert({
    where: { email: 'admin@ark.local' },
    update: {},
    create: {
      email: 'admin@ark.local',
      passwordHash: hashedPassword,
      name: 'Admin User',
      role: 'ADMIN',
    },
  })

  console.log('✅ Admin user created:', adminUser.email)

  // Create sample authors
  const author1 = await prisma.author.upsert({
    where: { slug: 'juan-perez' },
    update: {},
    create: {
      slug: 'juan-perez',
      name: 'Juan Pérez',
      role: 'Founding Partner — Technology',
      bio: 'Expert en arquitectura de software y transformación digital.',
      email: 'juan@ark.local',
    },
  })

  const author2 = await prisma.author.upsert({
    where: { slug: 'maria-garcia' },
    update: {},
    create: {
      slug: 'maria-garcia',
      name: 'María García',
      role: 'Head of Design',
      bio: 'Especialista en UX/UI y experiencia del usuario.',
      email: 'maria@ark.local',
    },
  })

  console.log('✅ Sample authors created')

  // Create sample tags
  const tag1 = await prisma.tag.upsert({
    where: { slug: 'tecnologia' },
    update: {},
    create: {
      slug: 'tecnologia',
      name: 'Tecnología',
    },
  })

  const tag2 = await prisma.tag.upsert({
    where: { slug: 'innovacion' },
    update: {},
    create: {
      slug: 'innovacion',
      name: 'Innovación',
    },
  })

  console.log('✅ Sample tags created')

  // Create sample post
  const post = await prisma.post.create({
    data: {
      slug: 'bienvenido-al-cms',
      title: 'Bienvenido al CMS de ARK',
      excerpt: 'Este es tu primer post de demostración en el CMS de ARK Platforms.',
      content: {
        type: 'doc',
        content: [
          {
            type: 'heading',
            attrs: { level: 2 },
            content: [{ type: 'text', text: 'Bienvenido' }],
          },
          {
            type: 'paragraph',
            content: [
              {
                type: 'text',
                text: 'Este es un post de ejemplo creado automáticamente al inicializar el CMS. Puedes editarlo, eliminarlo o crear nuevos posts.',
              },
            ],
          },
        ],
      },
      status: 'DRAFT',
      authorId: author1.id,
      createdById: adminUser.id,
      tags: {
        create: [{ tagId: tag1.id }, { tagId: tag2.id }],
      },
    },
  })

  console.log('✅ Sample post created')

  // Create settings
  await prisma.setting.upsert({
    where: { key: 'siteTitle' },
    update: { value: 'ARK Platforms' },
    create: { key: 'siteTitle', value: 'ARK Platforms' },
  })

  await prisma.setting.upsert({
    where: { key: 'siteDescription' },
    update: { value: 'Content Management System para ARK Platforms' },
    create: { key: 'siteDescription', value: 'Content Management System para ARK Platforms' },
  })

  console.log('✅ Settings initialized')
  console.log('\n🎉 Database seeding completed!')
  console.log('\n📝 Credentials for login:')
  console.log('   Email: admin@ark.local')
  console.log('   Password: changeme123')
}

main()
  .catch((e) => {
    console.error(e)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  })
