export default{
    name:'skills',
    title:'Skills',
    type: 'document',
    fields:[
        {
            name:'name',
            title:'Name',
            type:'string'
        },
        {
            name:'bgColor',
            title:'BgColor',
            type:'string'
        },
        {
            name:'icon',
            title:'Icon',
            type: 'image',
            options: {
              hotspot: true,
            },
        },
    ],
    orderings: [
        {
            title: 'Order by created date, ascending',
            name: 'createdAt_ASC',
            by : [
                {field: '_createdAt', direction: 'asc'},
            ]
        }
    ]
}