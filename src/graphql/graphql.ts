import { GraphQLClient, RequestOptions } from 'graphql-request';
import gql from 'graphql-tag';
export type Maybe<T> = T;
export type InputMaybe<T> = T;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
type GraphQLClientRequestHeaders = RequestOptions['requestHeaders'];
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
  DateTime: { input: any; output: any; }
  QueryArgument: { input: any; output: any; }
};

export type AssetRelationCriteriaInput = {
  /** Narrows the query results to only elements that have been archived. */
  archived: InputMaybe<Scalars['Boolean']['input']>;
  caption: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  customTitle: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  /** Narrows the query results based on the elements’ creation dates. */
  dateCreated: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Narrows the query results based on the assets’ files’ last-modified dates. */
  dateModified: InputMaybe<Scalars['String']['input']>;
  /** Narrows the query results based on the elements’ last-updated dates. */
  dateUpdated: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Narrows the query results based on the assets’ filenames. */
  filename: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Causes the query results to be returned in the order specified by the `id` argument. */
  fixedOrder: InputMaybe<Scalars['Boolean']['input']>;
  /** Narrows the query results based on the folders the assets belong to, per the folders’ IDs. */
  folderId: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  /** Narrows the query results based on whether the assets have alternative text. */
  hasAlt: InputMaybe<Scalars['Boolean']['input']>;
  /** Narrows the query results based on the assets’ image heights. */
  height: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  hyperLink: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  /** Narrows the query results based on the elements’ IDs. */
  id: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  /** Causes the query results to be returned in reverse order. */
  inReverse: InputMaybe<Scalars['Boolean']['input']>;
  /** Broadens the query results to include assets from any of the subfolders of the folder specified by `folderId`. */
  includeSubfolders: InputMaybe<Scalars['Boolean']['input']>;
  /** Narrows the query results based on the assets’ file kinds. */
  kind: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Determines which site(s) the elements should be queried in, based on their language. */
  language: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Sets the limit for paginated results. */
  limit: InputMaybe<Scalars['Int']['input']>;
  /** Narrows the query results to elements that do not relate to the provided element IDs. */
  notRelatedTo: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  /** Sets the offset for paginated results. */
  offset: InputMaybe<Scalars['Int']['input']>;
  /** Sets the field the returned elements should be ordered by. */
  orderBy: InputMaybe<Scalars['String']['input']>;
  /** Determines which site should be selected when querying multi-site elements. */
  preferSites: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  /** Narrows the query results based on a reference string. */
  ref: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Narrows the query results to elements that relate to the provided element IDs. This argument is ignored, if `relatedToAll` is also used. */
  relatedTo: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  /** Narrows the query results to elements that relate to *all* of the provided element IDs. Using this argument will cause `relatedTo` argument to be ignored. **This argument is deprecated.** `relatedTo: ["and", ...ids]` should be used instead. */
  relatedToAll: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  /** Narrows the query results to elements that relate to an asset list defined with this argument. */
  relatedToAssets: InputMaybe<Array<InputMaybe<AssetRelationCriteriaInput>>>;
  /** Narrows the query results to elements that relate to a category list defined with this argument. */
  relatedToCategories: InputMaybe<Array<InputMaybe<CategoryRelationCriteriaInput>>>;
  /** Narrows the query results to elements that relate to an entry list defined with this argument. */
  relatedToEntries: InputMaybe<Array<InputMaybe<EntryRelationCriteriaInput>>>;
  /** Narrows the query results to elements that relate to a tag list defined with this argument. */
  relatedToTags: InputMaybe<Array<InputMaybe<TagRelationCriteriaInput>>>;
  /** Narrows the query results to elements that relate to a use list defined with this argument. */
  relatedToUsers: InputMaybe<Array<InputMaybe<UserRelationCriteriaInput>>>;
  /** Narrows the relations based on the field they were created in. */
  relatedViaField: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Narrows the relations based on the site they were created in. */
  relatedViaSite: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Narrows the query results to only elements that match a search query. */
  search: InputMaybe<Scalars['String']['input']>;
  /** Determines which site(s) the elements should be queried in. Defaults to the current (requested) site. */
  site: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Determines which site(s) the elements should be queried in. Defaults to the current (requested) site. */
  siteId: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  /** Narrows the query results based on the unique identifier for an element-site relation. */
  siteSettingsId: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  /** Narrows the query results based on the assets’ file sizes (in bytes). */
  size: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Narrows the query results based on the elements’ slugs. */
  slug: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  source: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  /** Narrows the query results based on the elements’ statuses. */
  status: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Narrows the query results based on the elements’ titles. */
  title: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Narrows the query results to only elements that have been soft-deleted. */
  trashed: InputMaybe<Scalars['Boolean']['input']>;
  /** Narrows the query results based on the elements’ UIDs. */
  uid: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Determines whether only elements with unique IDs should be returned by the query. */
  unique: InputMaybe<Scalars['Boolean']['input']>;
  /** Narrows the query results based on the user the assets were uploaded by, per the user’s ID. */
  uploader: InputMaybe<Scalars['QueryArgument']['input']>;
  /** Narrows the query results based on the elements’ URIs. */
  uri: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Narrows the query results based on the volumes the assets belong to, per the volumes’ handles. */
  volume: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Narrows the query results based on the volumes the assets belong to, per the volumes’ IDs. */
  volumeId: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  /** Narrows the query results based on the assets’ image widths. */
  width: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** A list of transform handles to preload. */
  withTransforms: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type CategoryRelationCriteriaInput = {
  /** Narrows the query results to only elements that are up to a certain distance away from the element in its structure specified by `ancestorOf`. */
  ancestorDist: InputMaybe<Scalars['Int']['input']>;
  /** Narrows the query results to only elements that are ancestors of another element in its structure, provided by its ID. */
  ancestorOf: InputMaybe<Scalars['Int']['input']>;
  /** Narrows the query results to only elements that have been archived. */
  archived: InputMaybe<Scalars['Boolean']['input']>;
  /** Narrows the query results based on the elements’ creation dates. */
  dateCreated: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Narrows the query results based on the elements’ last-updated dates. */
  dateUpdated: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Narrows the query results to only elements that are up to a certain distance away from the element in its structure specified by `descendantOf`. */
  descendantDist: InputMaybe<Scalars['Int']['input']>;
  /** Narrows the query results to only elements that are descendants of another element in its structure provided by its ID. */
  descendantOf: InputMaybe<Scalars['Int']['input']>;
  /** Whether to only return categories that the user has permission to edit. */
  editable: InputMaybe<Scalars['Boolean']['input']>;
  /** Causes the query results to be returned in the order specified by the `id` argument. */
  fixedOrder: InputMaybe<Scalars['Boolean']['input']>;
  /** Narrows the query results based on the category groups the categories belong to per the group’s handles. */
  group: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Narrows the query results based on the category groups the categories belong to, per the groups’ IDs. */
  groupId: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  /** Narrows the query results based on whether the elements have any descendants in their structure. */
  hasDescendants: InputMaybe<Scalars['Boolean']['input']>;
  /** Narrows the query results based on the elements’ IDs. */
  id: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  /** Causes the query results to be returned in reverse order. */
  inReverse: InputMaybe<Scalars['Boolean']['input']>;
  /** Determines which site(s) the elements should be queried in, based on their language. */
  language: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Narrows the query results based on whether the elements are “leaves” in their structure (element with no descendants). */
  leaves: InputMaybe<Scalars['Boolean']['input']>;
  /** Narrows the query results based on the elements’ level within the structure. */
  level: InputMaybe<Scalars['Int']['input']>;
  /** Sets the limit for paginated results. */
  limit: InputMaybe<Scalars['Int']['input']>;
  /** Narrows the query results to only the entry that comes immediately after another element in its structure, provided by its ID. */
  nextSiblingOf: InputMaybe<Scalars['Int']['input']>;
  /** Narrows the query results to elements that do not relate to the provided element IDs. */
  notRelatedTo: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  /** Sets the offset for paginated results. */
  offset: InputMaybe<Scalars['Int']['input']>;
  /** Sets the field the returned elements should be ordered by. */
  orderBy: InputMaybe<Scalars['String']['input']>;
  /** Narrows the query results to only entries that are positioned after another element in its structure, provided by its ID. */
  positionedAfter: InputMaybe<Scalars['Int']['input']>;
  /** Narrows the query results to only entries that are positioned before another element in its structure, provided by its ID. */
  positionedBefore: InputMaybe<Scalars['Int']['input']>;
  /** Determines which site should be selected when querying multi-site elements. */
  preferSites: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  /** Narrows the query results to only the entry that comes immediately before another element in its structure, provided by its ID. */
  prevSiblingOf: InputMaybe<Scalars['Int']['input']>;
  /** Narrows the query results based on a reference string. */
  ref: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Narrows the query results to elements that relate to the provided element IDs. This argument is ignored, if `relatedToAll` is also used. */
  relatedTo: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  /** Narrows the query results to elements that relate to *all* of the provided element IDs. Using this argument will cause `relatedTo` argument to be ignored. **This argument is deprecated.** `relatedTo: ["and", ...ids]` should be used instead. */
  relatedToAll: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  /** Narrows the query results to elements that relate to an asset list defined with this argument. */
  relatedToAssets: InputMaybe<Array<InputMaybe<AssetRelationCriteriaInput>>>;
  /** Narrows the query results to elements that relate to a category list defined with this argument. */
  relatedToCategories: InputMaybe<Array<InputMaybe<CategoryRelationCriteriaInput>>>;
  /** Narrows the query results to elements that relate to an entry list defined with this argument. */
  relatedToEntries: InputMaybe<Array<InputMaybe<EntryRelationCriteriaInput>>>;
  /** Narrows the query results to elements that relate to a tag list defined with this argument. */
  relatedToTags: InputMaybe<Array<InputMaybe<TagRelationCriteriaInput>>>;
  /** Narrows the query results to elements that relate to a use list defined with this argument. */
  relatedToUsers: InputMaybe<Array<InputMaybe<UserRelationCriteriaInput>>>;
  /** Narrows the relations based on the field they were created in. */
  relatedViaField: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Narrows the relations based on the site they were created in. */
  relatedViaSite: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Narrows the query results to only elements that match a search query. */
  search: InputMaybe<Scalars['String']['input']>;
  /** Determines which site(s) the elements should be queried in. Defaults to the current (requested) site. */
  site: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Determines which site(s) the elements should be queried in. Defaults to the current (requested) site. */
  siteId: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  /** Narrows the query results based on the unique identifier for an element-site relation. */
  siteSettingsId: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  /** Narrows the query results based on the elements’ slugs. */
  slug: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Narrows the query results based on the elements’ statuses. */
  status: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Determines which structure data should be joined into the query. */
  structureId: InputMaybe<Scalars['Int']['input']>;
  /** Narrows the query results based on the elements’ titles. */
  title: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Narrows the query results to only elements that have been soft-deleted. */
  trashed: InputMaybe<Scalars['Boolean']['input']>;
  /** Narrows the query results based on the elements’ UIDs. */
  uid: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Determines whether only elements with unique IDs should be returned by the query. */
  unique: InputMaybe<Scalars['Boolean']['input']>;
  /** Narrows the query results based on the elements’ URIs. */
  uri: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Explicitly determines whether the query should join in the structure data. */
  withStructure: InputMaybe<Scalars['Boolean']['input']>;
};

export type EntryRelationCriteriaInput = {
  /** Narrows the query results to only entries that were posted on or after a certain date. */
  after: InputMaybe<Scalars['String']['input']>;
  /** Narrows the query results to only elements that are up to a certain distance away from the element in its structure specified by `ancestorOf`. */
  ancestorDist: InputMaybe<Scalars['Int']['input']>;
  /** Narrows the query results to only elements that are ancestors of another element in its structure, provided by its ID. */
  ancestorOf: InputMaybe<Scalars['Int']['input']>;
  /** Narrows the query results to only elements that have been archived. */
  archived: InputMaybe<Scalars['Boolean']['input']>;
  /** Narrows the query results based on the user group the entries’ authors belong to. */
  authorGroup: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Narrows the query results based on the user group the entries’ authors belong to, per the groups’ IDs. */
  authorGroupId: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  /** Narrows the query results based on the entries’ authors. */
  authorId: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  autoplay: InputMaybe<Scalars['Boolean']['input']>;
  backgroundColor: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  /** Narrows the query results to only entries that were posted before a certain date. */
  before: InputMaybe<Scalars['String']['input']>;
  codeSnippet: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  codeSnippetName: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  collapsed: InputMaybe<Scalars['Boolean']['input']>;
  columnRatio: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  customTitle: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  /** Narrows the query results based on the elements’ creation dates. */
  dateCreated: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Narrows the query results based on the elements’ last-updated dates. */
  dateUpdated: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Narrows the query results to only elements that are up to a certain distance away from the element in its structure specified by `descendantOf`. */
  descendantDist: InputMaybe<Scalars['Int']['input']>;
  /** Narrows the query results to only elements that are descendants of another element in its structure provided by its ID. */
  descendantOf: InputMaybe<Scalars['Int']['input']>;
  description: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  /** The drafts’ creator ID */
  draftCreator: InputMaybe<Scalars['Int']['input']>;
  /** The ID of the draft to return (from the `drafts` table) */
  draftId: InputMaybe<Scalars['Int']['input']>;
  /** Narrows the query results to only drafts of a given element.  Set to `false` to fetch unpublished drafts. */
  draftOf: InputMaybe<Scalars['QueryArgument']['input']>;
  /** Whether draft elements should be returned. */
  drafts: InputMaybe<Scalars['Boolean']['input']>;
  /** Whether to only return entries that the user has permission to edit. */
  editable: InputMaybe<Scalars['Boolean']['input']>;
  /** Narrows the query results based on the entries’ expiry dates. */
  expiryDate: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Narrows the query results based on the field the entries are contained by. */
  field: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Narrows the query results based on the field the entries are contained by, per the fields’ IDs. */
  fieldId: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  /** Causes the query results to be returned in the order specified by the `id` argument. */
  fixedOrder: InputMaybe<Scalars['Boolean']['input']>;
  /** Narrows the query results based on whether the elements have any descendants in their structure. */
  hasDescendants: InputMaybe<Scalars['Boolean']['input']>;
  height: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  hyperLink: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  hyperLinks: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  /** Narrows the query results based on the elements’ IDs. */
  id: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  image: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  imagePosition: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  imageRatio: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  images: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  imagesViewMode: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  /** Causes the query results to be returned in reverse order. */
  inReverse: InputMaybe<Scalars['Boolean']['input']>;
  /** Determines which site(s) the elements should be queried in, based on their language. */
  language: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Narrows the query results based on whether the elements are “leaves” in their structure (element with no descendants). */
  leaves: InputMaybe<Scalars['Boolean']['input']>;
  /** Narrows the query results based on the elements’ level within the structure. */
  level: InputMaybe<Scalars['Int']['input']>;
  /** Sets the limit for paginated results. */
  limit: InputMaybe<Scalars['Int']['input']>;
  loop: InputMaybe<Scalars['Boolean']['input']>;
  /** Narrows the query results to only the entry that comes immediately after another element in its structure, provided by its ID. */
  nextSiblingOf: InputMaybe<Scalars['Int']['input']>;
  /** Narrows the query results to elements that do not relate to the provided element IDs. */
  notRelatedTo: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  /** Sets the offset for paginated results. */
  offset: InputMaybe<Scalars['Int']['input']>;
  /** Sets the field the returned elements should be ordered by. */
  orderBy: InputMaybe<Scalars['String']['input']>;
  /** Narrows the query results based on the owner element of the entries, per the owners’ IDs. */
  ownerId: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  /** Narrows the query results to only entries that are positioned after another element in its structure, provided by its ID. */
  positionedAfter: InputMaybe<Scalars['Int']['input']>;
  /** Narrows the query results to only entries that are positioned before another element in its structure, provided by its ID. */
  positionedBefore: InputMaybe<Scalars['Int']['input']>;
  /** Narrows the query results based on the entries’ post dates. */
  postDate: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Determines which site should be selected when querying multi-site elements. */
  preferSites: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  /** Narrows the query results to only the entry that comes immediately before another element in its structure, provided by its ID. */
  prevSiblingOf: InputMaybe<Scalars['Int']['input']>;
  /** Narrows the query results based on the primary owner element of the entries, per the owners’ IDs. */
  primaryOwnerId: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  /** Whether provisional drafts should be returned. */
  provisionalDrafts: InputMaybe<Scalars['Boolean']['input']>;
  quote: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  /** Narrows the query results based on a reference string. */
  ref: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Narrows the query results to elements that relate to the provided element IDs. This argument is ignored, if `relatedToAll` is also used. */
  relatedTo: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  /** Narrows the query results to elements that relate to *all* of the provided element IDs. Using this argument will cause `relatedTo` argument to be ignored. **This argument is deprecated.** `relatedTo: ["and", ...ids]` should be used instead. */
  relatedToAll: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  /** Narrows the query results to elements that relate to an asset list defined with this argument. */
  relatedToAssets: InputMaybe<Array<InputMaybe<AssetRelationCriteriaInput>>>;
  /** Narrows the query results to elements that relate to a category list defined with this argument. */
  relatedToCategories: InputMaybe<Array<InputMaybe<CategoryRelationCriteriaInput>>>;
  /** Narrows the query results to elements that relate to an entry list defined with this argument. */
  relatedToEntries: InputMaybe<Array<InputMaybe<EntryRelationCriteriaInput>>>;
  /** Narrows the query results to elements that relate to a tag list defined with this argument. */
  relatedToTags: InputMaybe<Array<InputMaybe<TagRelationCriteriaInput>>>;
  /** Narrows the query results to elements that relate to a use list defined with this argument. */
  relatedToUsers: InputMaybe<Array<InputMaybe<UserRelationCriteriaInput>>>;
  /** Narrows the relations based on the field they were created in. */
  relatedViaField: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Narrows the relations based on the site they were created in. */
  relatedViaSite: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** The revisions’ creator ID */
  revisionCreator: InputMaybe<Scalars['Int']['input']>;
  /** The ID of the revision to return (from the `revisions` table) */
  revisionId: InputMaybe<Scalars['Int']['input']>;
  /** The source element ID that revisions should be returned for */
  revisionOf: InputMaybe<Scalars['QueryArgument']['input']>;
  /** Whether revision elements should be returned. */
  revisions: InputMaybe<Scalars['Boolean']['input']>;
  richText: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  /** Narrows the query results to only elements that match a search query. */
  search: InputMaybe<Scalars['String']['input']>;
  /** Narrows the query results based on the section handles the entries belong to. */
  section: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Narrows the query results based on the sections the entries belong to, per the sections’ IDs. */
  sectionId: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  seo: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  showCaption: InputMaybe<Scalars['Boolean']['input']>;
  /** Determines which site(s) the elements should be queried in. Defaults to the current (requested) site. */
  site: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Determines which site(s) the elements should be queried in. Defaults to the current (requested) site. */
  siteId: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  /** Narrows the query results based on the unique identifier for an element-site relation. */
  siteSettingsId: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  /** Narrows the query results based on the elements’ slugs. */
  slug: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  source: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  spaceBetween: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  spacingYAxis: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  /** Narrows the query results based on the elements’ statuses. */
  status: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Determines which structure data should be joined into the query. */
  structureId: InputMaybe<Scalars['Int']['input']>;
  /** Narrows the query results based on the elements’ titles. */
  title: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Narrows the query results to only elements that have been soft-deleted. */
  trashed: InputMaybe<Scalars['Boolean']['input']>;
  /** Narrows the query results based on the entries’ entry type handles. */
  type: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Narrows the query results based on the entries’ entry types, per the types’ IDs. */
  typeId: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  /** Narrows the query results based on the elements’ UIDs. */
  uid: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Determines whether only elements with unique IDs should be returned by the query. */
  unique: InputMaybe<Scalars['Boolean']['input']>;
  /** Narrows the query results based on the elements’ URIs. */
  uri: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  videoId: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  videoProvider: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  /** Explicitly determines whether the query should join in the structure data. */
  withStructure: InputMaybe<Scalars['Boolean']['input']>;
};

/** Optional - The SEOmatic environment that should be used */
export enum SeomaticEnvironment {
  /** Live production environment, with indexing enabled */
  Live = 'live',
  /** Local Development environment, with debugging enabled and indexing disabled */
  Local = 'local',
  /** Staging environment, with indexing disabled */
  Staging = 'staging'
}

export enum SeomaticFrontendTemplate {
  /** The ads.txt file */
  Ads = 'ads',
  /** The humans.txt file */
  Humans = 'humans',
  /** The robots.txt file */
  Robots = 'robots',
  /** The security.txt file */
  Security = 'security'
}

export type TagRelationCriteriaInput = {
  /** Narrows the query results to only elements that have been archived. */
  archived: InputMaybe<Scalars['Boolean']['input']>;
  /** Narrows the query results based on the elements’ creation dates. */
  dateCreated: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Narrows the query results based on the elements’ last-updated dates. */
  dateUpdated: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Causes the query results to be returned in the order specified by the `id` argument. */
  fixedOrder: InputMaybe<Scalars['Boolean']['input']>;
  /** Narrows the query results based on the tag groups the tags belong to per the group’s handles. */
  group: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Narrows the query results based on the tag groups the tags belong to, per the groups’ IDs. */
  groupId: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  /** Narrows the query results based on the elements’ IDs. */
  id: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  /** Causes the query results to be returned in reverse order. */
  inReverse: InputMaybe<Scalars['Boolean']['input']>;
  /** Determines which site(s) the elements should be queried in, based on their language. */
  language: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Sets the limit for paginated results. */
  limit: InputMaybe<Scalars['Int']['input']>;
  /** Narrows the query results to elements that do not relate to the provided element IDs. */
  notRelatedTo: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  /** Sets the offset for paginated results. */
  offset: InputMaybe<Scalars['Int']['input']>;
  /** Sets the field the returned elements should be ordered by. */
  orderBy: InputMaybe<Scalars['String']['input']>;
  /** Determines which site should be selected when querying multi-site elements. */
  preferSites: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  /** Narrows the query results based on a reference string. */
  ref: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Narrows the query results to elements that relate to the provided element IDs. This argument is ignored, if `relatedToAll` is also used. */
  relatedTo: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  /** Narrows the query results to elements that relate to *all* of the provided element IDs. Using this argument will cause `relatedTo` argument to be ignored. **This argument is deprecated.** `relatedTo: ["and", ...ids]` should be used instead. */
  relatedToAll: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  /** Narrows the query results to elements that relate to an asset list defined with this argument. */
  relatedToAssets: InputMaybe<Array<InputMaybe<AssetRelationCriteriaInput>>>;
  /** Narrows the query results to elements that relate to a category list defined with this argument. */
  relatedToCategories: InputMaybe<Array<InputMaybe<CategoryRelationCriteriaInput>>>;
  /** Narrows the query results to elements that relate to an entry list defined with this argument. */
  relatedToEntries: InputMaybe<Array<InputMaybe<EntryRelationCriteriaInput>>>;
  /** Narrows the query results to elements that relate to a tag list defined with this argument. */
  relatedToTags: InputMaybe<Array<InputMaybe<TagRelationCriteriaInput>>>;
  /** Narrows the query results to elements that relate to a use list defined with this argument. */
  relatedToUsers: InputMaybe<Array<InputMaybe<UserRelationCriteriaInput>>>;
  /** Narrows the relations based on the field they were created in. */
  relatedViaField: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Narrows the relations based on the site they were created in. */
  relatedViaSite: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Narrows the query results to only elements that match a search query. */
  search: InputMaybe<Scalars['String']['input']>;
  /** Determines which site(s) the elements should be queried in. Defaults to the current (requested) site. */
  site: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Determines which site(s) the elements should be queried in. Defaults to the current (requested) site. */
  siteId: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  /** Narrows the query results based on the unique identifier for an element-site relation. */
  siteSettingsId: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  /** Narrows the query results based on the elements’ slugs. */
  slug: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Narrows the query results based on the elements’ statuses. */
  status: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Narrows the query results based on the elements’ titles. */
  title: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Narrows the query results to only elements that have been soft-deleted. */
  trashed: InputMaybe<Scalars['Boolean']['input']>;
  /** Narrows the query results based on the elements’ UIDs. */
  uid: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Determines whether only elements with unique IDs should be returned by the query. */
  unique: InputMaybe<Scalars['Boolean']['input']>;
  /** Narrows the query results based on the elements’ URIs. */
  uri: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type UserRelationCriteriaInput = {
  /** Narrows the query results to only elements that have been archived. */
  archived: InputMaybe<Scalars['Boolean']['input']>;
  /** Narrows the query results based on whether the users have uploaded any assets. */
  assetUploaders: InputMaybe<Scalars['Boolean']['input']>;
  /** Narrows the query results based on whether the users are listed as the author of any entries. */
  authors: InputMaybe<Scalars['Boolean']['input']>;
  /** Narrows the query results based on the elements’ creation dates. */
  dateCreated: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Narrows the query results based on the elements’ last-updated dates. */
  dateUpdated: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Narrows the query results based on the users’ email addresses. */
  email: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Narrows the query results based on the users’ first names. */
  firstName: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Causes the query results to be returned in the order specified by the `id` argument. */
  fixedOrder: InputMaybe<Scalars['Boolean']['input']>;
  /** Narrows the query results based on the users’ full names. */
  fullName: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Narrows the query results based on the user group the users belong to. */
  group: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  /** Narrows the query results based on the user group the users belong to, per the groups’ IDs. */
  groupId: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  /** Narrows the query results to only users that have (or don’t have) a user photo. */
  hasPhoto: InputMaybe<Scalars['Boolean']['input']>;
  /** Narrows the query results based on the elements’ IDs. */
  id: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  /** Causes the query results to be returned in reverse order. */
  inReverse: InputMaybe<Scalars['Boolean']['input']>;
  /** Determines which site(s) the elements should be queried in, based on their language. */
  language: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Narrows the query results based on the users’ last names. */
  lastName: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Sets the limit for paginated results. */
  limit: InputMaybe<Scalars['Int']['input']>;
  /** Narrows the query results to elements that do not relate to the provided element IDs. */
  notRelatedTo: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  /** Sets the offset for paginated results. */
  offset: InputMaybe<Scalars['Int']['input']>;
  /** Sets the field the returned elements should be ordered by. */
  orderBy: InputMaybe<Scalars['String']['input']>;
  /** Determines which site should be selected when querying multi-site elements. */
  preferSites: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  /** Narrows the query results based on a reference string. */
  ref: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Narrows the query results to elements that relate to the provided element IDs. This argument is ignored, if `relatedToAll` is also used. */
  relatedTo: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  /** Narrows the query results to elements that relate to *all* of the provided element IDs. Using this argument will cause `relatedTo` argument to be ignored. **This argument is deprecated.** `relatedTo: ["and", ...ids]` should be used instead. */
  relatedToAll: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  /** Narrows the query results to elements that relate to an asset list defined with this argument. */
  relatedToAssets: InputMaybe<Array<InputMaybe<AssetRelationCriteriaInput>>>;
  /** Narrows the query results to elements that relate to a category list defined with this argument. */
  relatedToCategories: InputMaybe<Array<InputMaybe<CategoryRelationCriteriaInput>>>;
  /** Narrows the query results to elements that relate to an entry list defined with this argument. */
  relatedToEntries: InputMaybe<Array<InputMaybe<EntryRelationCriteriaInput>>>;
  /** Narrows the query results to elements that relate to a tag list defined with this argument. */
  relatedToTags: InputMaybe<Array<InputMaybe<TagRelationCriteriaInput>>>;
  /** Narrows the query results to elements that relate to a use list defined with this argument. */
  relatedToUsers: InputMaybe<Array<InputMaybe<UserRelationCriteriaInput>>>;
  /** Narrows the relations based on the field they were created in. */
  relatedViaField: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Narrows the relations based on the site they were created in. */
  relatedViaSite: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Narrows the query results to only elements that match a search query. */
  search: InputMaybe<Scalars['String']['input']>;
  /** Determines which site(s) the elements should be queried in. Defaults to the current (requested) site. */
  site: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Determines which site(s) the elements should be queried in. Defaults to the current (requested) site. */
  siteId: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  /** Narrows the query results based on the unique identifier for an element-site relation. */
  siteSettingsId: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  /** Narrows the query results based on the elements’ slugs. */
  slug: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Narrows the query results based on the elements’ statuses. */
  status: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Narrows the query results based on the elements’ titles. */
  title: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Narrows the query results to only elements that have been soft-deleted. */
  trashed: InputMaybe<Scalars['Boolean']['input']>;
  /** Narrows the query results based on the elements’ UIDs. */
  uid: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Determines whether only elements with unique IDs should be returned by the query. */
  unique: InputMaybe<Scalars['Boolean']['input']>;
  /** Narrows the query results based on the elements’ URIs. */
  uri: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Narrows the query results based on the users’ usernames. */
  username: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type GetEntriesQueryVariables = Exact<{
  site?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>> | InputMaybe<Scalars['String']['input']>>;
  section?: Array<InputMaybe<Scalars['String']['input']>> | InputMaybe<Scalars['String']['input']>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  uri?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>> | InputMaybe<Scalars['String']['input']>>;
}>;


export type GetEntriesQuery = { entries: Array<{ id: string, uid: string, title: string, slug: string, uri: string, url: string, canonicalId: number, language: string, sectionHandle: string, typeHandle: string, siteHandle: string, siteId: number } | { id: string, uid: string, title: string, slug: string, uri: string, url: string, canonicalId: number, language: string, sectionHandle: string, typeHandle: string, siteHandle: string, siteId: number } | { id: string, uid: string, title: string, slug: string, uri: string, url: string, canonicalId: number, language: string, sectionHandle: string, typeHandle: string, siteHandle: string, siteId: number } | { id: string, uid: string, title: string, slug: string, uri: string, url: string, canonicalId: number, language: string, sectionHandle: string, typeHandle: string, siteHandle: string, siteId: number } | { id: string, uid: string, title: string, slug: string, uri: string, url: string, canonicalId: number, language: string, sectionHandle: string, typeHandle: string, siteHandle: string, siteId: number } | { id: string, uid: string, title: string, slug: string, uri: string, url: string, canonicalId: number, language: string, sectionHandle: string, typeHandle: string, siteHandle: string, siteId: number } | { id: string, uid: string, title: string, slug: string, uri: string, url: string, canonicalId: number, language: string, sectionHandle: string, typeHandle: string, siteHandle: string, siteId: number } | { id: string, uid: string, title: string, slug: string, uri: string, url: string, canonicalId: number, language: string, sectionHandle: string, typeHandle: string, siteHandle: string, siteId: number } | { id: string, uid: string, title: string, slug: string, uri: string, url: string, canonicalId: number, language: string, sectionHandle: string, typeHandle: string, siteHandle: string, siteId: number } | { id: string, uid: string, title: string, slug: string, uri: string, url: string, canonicalId: number, language: string, sectionHandle: string, typeHandle: string, siteHandle: string, siteId: number } | { id: string, uid: string, title: string, slug: string, uri: string, url: string, canonicalId: number, language: string, sectionHandle: string, typeHandle: string, siteHandle: string, siteId: number } | { __typename: 'entryBlogDetail_Entry', id: string, uid: string, title: string, slug: string, uri: string, url: string, canonicalId: number, language: string, sectionHandle: string, typeHandle: string, siteHandle: string, siteId: number } | { id: string, uid: string, title: string, slug: string, uri: string, url: string, canonicalId: number, language: string, sectionHandle: string, typeHandle: string, siteHandle: string, siteId: number } | { id: string, uid: string, title: string, slug: string, uri: string, url: string, canonicalId: number, language: string, sectionHandle: string, typeHandle: string, siteHandle: string, siteId: number } | { id: string, uid: string, title: string, slug: string, uri: string, url: string, canonicalId: number, language: string, sectionHandle: string, typeHandle: string, siteHandle: string, siteId: number } | { id: string, uid: string, title: string, slug: string, uri: string, url: string, canonicalId: number, language: string, sectionHandle: string, typeHandle: string, siteHandle: string, siteId: number }> };

type Entry_Data_BlockCode_Entry_Fragment = { id: string, uid: string, title: string, slug: string, uri: string, url: string, canonicalId: number, language: string, sectionHandle: string, typeHandle: string, siteHandle: string, siteId: number };

type Entry_Data_BlockColumn_Entry_Fragment = { id: string, uid: string, title: string, slug: string, uri: string, url: string, canonicalId: number, language: string, sectionHandle: string, typeHandle: string, siteHandle: string, siteId: number };

type Entry_Data_BlockImage_Entry_Fragment = { id: string, uid: string, title: string, slug: string, uri: string, url: string, canonicalId: number, language: string, sectionHandle: string, typeHandle: string, siteHandle: string, siteId: number };

type Entry_Data_BlockImages_Entry_Fragment = { id: string, uid: string, title: string, slug: string, uri: string, url: string, canonicalId: number, language: string, sectionHandle: string, typeHandle: string, siteHandle: string, siteId: number };

type Entry_Data_BlockLinks_Entry_Fragment = { id: string, uid: string, title: string, slug: string, uri: string, url: string, canonicalId: number, language: string, sectionHandle: string, typeHandle: string, siteHandle: string, siteId: number };

type Entry_Data_BlockQuote_Entry_Fragment = { id: string, uid: string, title: string, slug: string, uri: string, url: string, canonicalId: number, language: string, sectionHandle: string, typeHandle: string, siteHandle: string, siteId: number };

type Entry_Data_BlockSection_Entry_Fragment = { id: string, uid: string, title: string, slug: string, uri: string, url: string, canonicalId: number, language: string, sectionHandle: string, typeHandle: string, siteHandle: string, siteId: number };

type Entry_Data_BlockSpacer_Entry_Fragment = { id: string, uid: string, title: string, slug: string, uri: string, url: string, canonicalId: number, language: string, sectionHandle: string, typeHandle: string, siteHandle: string, siteId: number };

type Entry_Data_BlockTextImage_Entry_Fragment = { id: string, uid: string, title: string, slug: string, uri: string, url: string, canonicalId: number, language: string, sectionHandle: string, typeHandle: string, siteHandle: string, siteId: number };

type Entry_Data_BlockText_Entry_Fragment = { id: string, uid: string, title: string, slug: string, uri: string, url: string, canonicalId: number, language: string, sectionHandle: string, typeHandle: string, siteHandle: string, siteId: number };

type Entry_Data_BlockVideo_Entry_Fragment = { id: string, uid: string, title: string, slug: string, uri: string, url: string, canonicalId: number, language: string, sectionHandle: string, typeHandle: string, siteHandle: string, siteId: number };

type Entry_Data_EntryBlogDetail_Entry_Fragment = { id: string, uid: string, title: string, slug: string, uri: string, url: string, canonicalId: number, language: string, sectionHandle: string, typeHandle: string, siteHandle: string, siteId: number };

type Entry_Data_EntryContentBuilder_Entry_Fragment = { id: string, uid: string, title: string, slug: string, uri: string, url: string, canonicalId: number, language: string, sectionHandle: string, typeHandle: string, siteHandle: string, siteId: number };

type Entry_Data_EntryError_Entry_Fragment = { id: string, uid: string, title: string, slug: string, uri: string, url: string, canonicalId: number, language: string, sectionHandle: string, typeHandle: string, siteHandle: string, siteId: number };

type Entry_Data_EntryHome_Entry_Fragment = { id: string, uid: string, title: string, slug: string, uri: string, url: string, canonicalId: number, language: string, sectionHandle: string, typeHandle: string, siteHandle: string, siteId: number };

type Entry_Data_EntryListBlog_Entry_Fragment = { id: string, uid: string, title: string, slug: string, uri: string, url: string, canonicalId: number, language: string, sectionHandle: string, typeHandle: string, siteHandle: string, siteId: number };

export type Entry_DataFragment = Entry_Data_BlockCode_Entry_Fragment | Entry_Data_BlockColumn_Entry_Fragment | Entry_Data_BlockImage_Entry_Fragment | Entry_Data_BlockImages_Entry_Fragment | Entry_Data_BlockLinks_Entry_Fragment | Entry_Data_BlockQuote_Entry_Fragment | Entry_Data_BlockSection_Entry_Fragment | Entry_Data_BlockSpacer_Entry_Fragment | Entry_Data_BlockTextImage_Entry_Fragment | Entry_Data_BlockText_Entry_Fragment | Entry_Data_BlockVideo_Entry_Fragment | Entry_Data_EntryBlogDetail_Entry_Fragment | Entry_Data_EntryContentBuilder_Entry_Fragment | Entry_Data_EntryError_Entry_Fragment | Entry_Data_EntryHome_Entry_Fragment | Entry_Data_EntryListBlog_Entry_Fragment;

export type EntryType_BlogDetailFragment = { __typename: 'entryBlogDetail_Entry' };

export const Entry_DataFragmentDoc = gql`
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
export const EntryType_BlogDetailFragmentDoc = gql`
    fragment entryType_blogDetail on entryBlogDetail_Entry {
  __typename
}
    `;
export const GetEntriesDocument = gql`
    query GetEntries($site: [String] = ["davidhellmann_en"], $section: [String]! = ["blog"], $limit: Int = null, $uri: [String] = null) {
  entries(site: $site, section: $section, limit: $limit, uri: $uri) {
    ...entry_data
    ...entryType_blogDetail
  }
}
    ${Entry_DataFragmentDoc}
${EntryType_BlogDetailFragmentDoc}`;

export type SdkFunctionWrapper = <T>(action: (requestHeaders?:Record<string, string>) => Promise<T>, operationName: string, operationType?: string, variables?: any) => Promise<T>;


const defaultWrapper: SdkFunctionWrapper = (action, _operationName, _operationType, _variables) => action();

export function getSdk(client: GraphQLClient, withWrapper: SdkFunctionWrapper = defaultWrapper) {
  return {
    GetEntries(variables?: GetEntriesQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<GetEntriesQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<GetEntriesQuery>(GetEntriesDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'GetEntries', 'query', variables);
    }
  };
}
export type Sdk = ReturnType<typeof getSdk>;