import {
    type LayoutItem,
    PageGenerator,
} from '@homework-task/components/PageGenerator';

const examplePageData: LayoutItem[] = [
    {
        type: 'layoutSection',
        props: { background: 'bg-primary' },
        components: [
            {
                type: 'componentHero',
                props: {
                    image: 'https://picsum.photos/200/300',
                    title: 'Hero 1',
                },
            },
        ],
    },
    {
        type: 'layoutSection',
        props: { background: 'bg-main-green' },
        components: [
            {
                type: 'componentItemsShowcase',
                props: {
                    items: [
                        {
                            description: 'Item 1 description',
                            title: 'Item 1',
                        },
                        {
                            description: 'Item 2 description',
                            title: 'Item 2',
                        },
                    ],
                },
            },
            {
                type: 'componentTrustBar',
                props: {
                    images: [
                        'https://picsum.photos/200/300',
                        'https://picsum.photos/200/300',
                        'https://picsum.photos/200/300',
                    ],
                },
            },
        ],
    },
];

export function ExamplePage() {
    return <PageGenerator data={examplePageData} />;
}
