import { gql } from '@apollo/client';

export const FRAGMENT_ENTRY_DATA = gql`
    fragment entry_data on EntryInterface {
        id
        uid
        title
        slug
        uri
        url
        canonicalId
        language
        sectionHandle
        typeHandle
        siteHandle
        siteId
    }
`;
