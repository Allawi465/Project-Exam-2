/**
 * confirm Url value
 * @param {regExEValue} using regExE to confirm input value
 */

export function confirmUrl(mediaGallery) {
  const regExEValue =
    /^https?:\/\/(?:www\.)?[-a-zA-Z0-9@:%._+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b(?:[-a-zA-Z0-9()@:%_+.~#?&/=]*)$/;
  const confirmingMatches = regExEValue.test(mediaGallery);
  return confirmingMatches;
}
