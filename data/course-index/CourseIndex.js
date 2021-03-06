const CourseTopics = [
    {
        id: 0,
        name: "Introduction",
        slug: "intro",
        numPages: 9,
    },
    {
        id: 1,
        name: "Valuation framework",
        slug: "framework",
        numPages: 5,
    },
    {
        id: 2,
        name: "Market of operation (E1)",
        slug: "market",
        numPages: 6,
    },
    {
        id: 3,
        name: "Competition (E2)",
        slug: "competition",
        numPages: 2,
    },
    {
        id: 4,
        name: "Business model (E3)",
        slug: "business",
        numPages: 6,
    },
    {
        id: 5,
        name: "Costs (E4)",
        slug: "costs",
        numPages: 1,
    },
    {
        id: 6,
        name: "Stage of growth (E5)",
        slug: "growth",
        numPages: 1,
    },
    {
        id: 7,
        name: "Risk factors (E6)",
        slug: "risks",
        numPages: 1,
    },
    {
        id: 8,
        name: "Financing (E7)",
        slug: "financing",
        numPages: 1,
    },
]

const numToLetter = (n) => {
    let result = ""
    do {
        result = ((n % 26) + 10).toString(36) + result
        n = Math.floor(n / 26) - 1
    } while (n >= 0)

    return result
}

let CourseIndex = CourseTopics.map((topic) => {
    let pages = []
    for (let i = 1; i <= topic.numPages; i++) {
        pages.push(numToLetter(topic.id) + "-" + topic.slug + "-" + i)
    }
    return pages
}).flat()

CourseIndex.unshift("id")

module.exports = {
    CourseTopics: CourseTopics,
    CourseIndex: CourseIndex,
}
