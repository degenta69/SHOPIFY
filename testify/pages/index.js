import { Avatar, Badge, Heading, Page, Thumbnail } from '@shopify/polaris'

const Index = () => (
  <Page
    title='Products'
    subtitle='no products available'
    titleMetadata={<Badge status='success'>Paid</Badge>}
    thumbnail={
      <Thumbnail
        source="https://burst.shopifycdn.com/photos/black-leather-choker-necklace_373x@2x.jpg"
        alt="Black leather pet collar"
      />
    }
    compactTitle
    primaryAction={{content: 'Save', disabled: false, onAction:()=>{alert('saved')}}}
    pagination={{
      hasPrevious: true,
      hasNext: true,
      onNext:()=>{alert('next page')},
      onPrevious:()=>{alert('prev page')},
      accessibilityLabel:{next:'hi',previous:'bye'},
      nextTooltip:'this is tooltip',
      previousTooltip:'this is prev tootip',
      nextURL:'https://youtube.com',
      
    }}
    additionalNavigation={<Avatar size='large' initials="DS" customer={false} />}
  >
    <Heading>Shopify app with Node and React 🎉</Heading>
  </Page>
)

export default Index
