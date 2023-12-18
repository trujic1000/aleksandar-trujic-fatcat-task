import { Hero, type HeroProps } from '@homework-task/components/Hero';
import {
    ItemsShowcase,
    type ItemsShowcaseProps,
} from '@homework-task/components/ItemsShowcase';
import { Layout, type LayoutProps } from '@homework-task/components/Layout';
import {
    TrustBar,
    type TrustBarProps,
} from '@homework-task/components/TrustBar';

// Add other layout types as needed using discriminated union
export type LayoutItem = {
    type: 'layoutSection';
    props: LayoutProps;
    components: ComponentItem[];
};

type ComponentItem =
    | { type: 'componentHero'; props: HeroProps }
    | { type: 'componentItemsShowcase'; props: ItemsShowcaseProps }
    | { type: 'componentTrustBar'; props: TrustBarProps };

export const PageGenerator = ({ data }: { data: LayoutItem[] }) => {
    return <div>{data.map((layoutItem) => renderLayoutItem(layoutItem))}</div>;
};

function renderComponentItem(item: ComponentItem) {
    switch (item.type) {
        case 'componentHero':
            return <Hero {...item.props} />;
        case 'componentItemsShowcase':
            return <ItemsShowcase {...item.props} />;
        case 'componentTrustBar':
            return <TrustBar {...item.props} />;
        // Add cases for other component types
        default:
            return null;
    }
}

function renderLayoutItem(item: LayoutItem) {
    switch (item.type) {
        case 'layoutSection':
            return (
                <Layout {...item.props}>
                    {item.components.map((componentItem) =>
                        renderComponentItem(componentItem)
                    )}
                </Layout>
            );
        // Add cases for other layout types
        default:
            return null;
    }
}
