import { gql } from '@apollo/client';
import { FRAGMENT_ENTRY_DATA } from '@/graphql/fragments/entry/data';


export const GetNewsEntries = gql`
    query GetNewsEntries(
        $site: [String]! = ["default"],
        $section: [String]!,
    ) {
        entries(site: $site, section: $section) {
            ...entry_data
        }
    }
    ${FRAGMENT_ENTRY_DATA}
`;
