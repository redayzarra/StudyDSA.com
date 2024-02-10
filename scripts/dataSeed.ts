import { arraySkills, graphSkills, hashmapSkills, heapSkills, linkedListSkills, queueSkills, segmentTreeSkills, treeSkills, trieSkills } from "@/data/skillsData";

const { PrismaClient } = require("@prisma/client");
const database = new PrismaClient();

async function dataSeed() {
  // Delete all topics and chapters first - onDelete cascade is on
  await database.topic.deleteMany({});

  // Arrays
  await database.topic.create({
    data: {
      name: "Arrays",
      description: "A linear data structure for storing elements.",
      href: "/",
      chapters: {
        create: arraySkills,
      },
    },
  });

  // Linked Lists
  await database.topic.create({
    data: {
      name: "Linked Lists",
      description: "Data elements connected together via links.",
      href: "/linked-lists",
      chapters: {
        create: linkedListSkills,
      },
    },
  });

  // Hashmaps
  await database.topic.create({
    data: {
      name: "Hashmaps",
      description: "Key-value pairs for efficient data lookup.",
      href: "/hashmaps",
      chapters: {
        create: hashmapSkills,
      },
    },
  });

  // Queues
  await database.topic.create({
    data: {
      name: "Queues",
      description: "FIFO data structure for ordered processing.",
      href: "/queues",
      chapters: {
        create: queueSkills,
      },
    },
  });

  // Trees
  await database.topic.create({
    data: {
      name: "Trees",
      description: "Hierarchical data structure for representing relationships.",
      href: "/trees",
      chapters: {
        create: treeSkills,
      },
    },
  });

  // Graphs
  await database.topic.create({
    data: {
      name: "Graphs",
      description: "Nodes connected by edges to represent networks.",
      href: "/graphs",
      chapters: {
        create: graphSkills,
      },
    },
  });

  // Heaps
  await database.topic.create({
    data: {
      name: "Heaps",
      description: "A specialized tree-based data structure that satisfies the heap property.",
      href: "/heaps",
      chapters: {
        create: heapSkills,
      },
    },
  });

  // Tries
  await database.topic.create({
    data: {
      name: "Tries",
      description: "A kind of search tree used to store a dynamic set or associative array.",
      href: "/tries",
      chapters: {
        create: trieSkills,
      },
    },
  });

  // Segment Trees
  await database.topic.create({
    data: {
      name: "Segment Trees",
      description: "A tree data structure for storing intervals or segments.",
      href: "/segment-trees",
      chapters: {
        create: segmentTreeSkills,
      },
    },
  });


  // Log the total number of topics added
  const totalTopics = await database.topic.count();
  console.log(`${totalTopics} topics have been added.`);
}

dataSeed()
  .catch(e => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await database.$disconnect();
  });
