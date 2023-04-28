type ListFilters = {
    isDeleted?: boolean;
    includeDeleted?: boolean;
}
export type GetAllVideosFilters = ListFilters;
export type GetAllReviewsFilters = ListFilters & {
    isPublished?: boolean
    isNotPublished?: boolean
}