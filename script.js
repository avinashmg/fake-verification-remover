verified_marks = {};
function removeAllVerification() {
  var elements = document.querySelectorAll('[aria-label="Verified account"]');
  if (elements !== null) {
    for (const element of elements) {
      var remove = true;
      var userNameElement =
        element.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement.querySelectorAll(
          '[data-testid="UserName"]'
        );
      if (userNameElement.length !== 0) {
        var verifiedElem = userNameElement[0].querySelector(
          '[aria-label="Verified account"]'
        );
        if (verifiedElem !== null) {
          const username =
            userNameElement[0].childNodes[0].childNodes[0].childNodes[1]
              .textContent;
          const id = Math.random();
          verified_marks[id] = element;
          chrome.runtime.sendMessage(
            {
              id: id,
              message: username.split("@")[1],
            },
            (response) => {}
          );
        }
      }
      var userNameElement = document.querySelectorAll(
        '[data-testid="User-Names"]'
      );
      if (userNameElement.length !== 0) {
        for (const userNames of userNameElement) {
          x_elements = userNames.querySelector(
            '[aria-label="Verified account"]'
          );
          if (x_elements !== null) {
            if (x_elements === element) {
              const spans = userNames.querySelectorAll("span");
              const id = Math.random();
              verified_marks[id] = element;
              chrome.runtime.sendMessage(
                {
                  id: id,
                  message: spans[2].textContent.split("@")[1],
                },
                (response) => {}
              );
            }
          }
        }
      }

      var userNameElement = document.querySelectorAll(
        '[data-testid="UserCell"]'
      );

      if (userNameElement.length !== 0) {
        for (const userNames of userNameElement) {
          x_elements = userNames.querySelector(
            '[aria-label="Verified account"]'
          );
          if (x_elements !== null) {
            if (x_elements === element) {
              const spans = userNames.querySelectorAll("span");
              const id = Math.random();
              let username;
              if (spans[2].textContent.split("@").length == 2) {
                username = spans[2].textContent.split("@")[1];
              } else if (spans[4].textContent.split("@").length == 2) {
                username = spans[4].textContent.split("@")[1];
              }
              verified_marks[id] = element;
              chrome.runtime.sendMessage(
                {
                  id: id,
                  message: username,
                },
                (response) => {}
              );
            }
          }
        }
      }
      var userNameElement = document.querySelectorAll(
        '[data-testid="HoverCard"]'
      );
      if (userNameElement.length !== 0) {
        for (const userNames of userNameElement) {
          x_elements = userNames.querySelector(
            '[aria-label="Verified account"]'
          );
          if (x_elements !== null) {
            if (x_elements === element) {
              const spans = userNames.querySelectorAll("span");
              const id = Math.random();
              verified_marks[id] = element;
              chrome.runtime.sendMessage(
                {
                  id: id,
                  message: spans[4].textContent.split("@")[1],
                },
                (response) => {}
              );
            }
          }
        }
      }
      var userNameElement = document.querySelectorAll(
        '[data-testid="TypeaheadUser"]'
      );
      if (userNameElement.length !== 0) {
        for (const userNames of userNameElement) {
          x_elements = userNames.querySelector(
            '[aria-label="Verified account"]'
          );
          if (x_elements !== null) {
            if (x_elements === element) {
              const spans = userNames.querySelectorAll("span");
              const id = Math.random();
              verified_marks[id] = element;
              chrome.runtime.sendMessage(
                {
                  id: id,
                  message: spans[2].textContent.split("@")[1],
                },
                (response) => {}
              );
            }
          }
        }
      }
      var userNameElement = document.querySelectorAll('div[role="link"]');
      if (userNameElement.length !== 0) {
        for (const userNames of userNameElement) {
          x_elements = userNames.querySelector(
            '[aria-label="Verified account"]'
          );
          if (x_elements !== null) {
            if (x_elements === element) {
              container =
                element.parentElement.parentElement.parentElement.parentElement
                  .parentElement;
              const spans = container.querySelectorAll("span");
              if (spans[2].textContent.split("@").length === 2) {
                const id = Math.random();
                verified_marks[id] = element;
                chrome.runtime.sendMessage(
                  {
                    id: id,
                    message: spans[2].textContent.split("@")[1],
                  },
                  (response) => {}
                );
              }
            }
          }
        }
      }
      var userNameElement = document.querySelectorAll('h2[role="heading"]');
      if (userNameElement.length !== 0) {
        for (const userNames of userNameElement) {
          x_elements = userNames.querySelector(
            '[aria-label="Verified account"]'
          );
          if (x_elements !== null) {
            if (x_elements === element) {
              const username = window.location.href.split("/")[3];
              const id = Math.random();
              verified_marks[id] = element;
              chrome.runtime.sendMessage(
                {
                  id: id,
                  message: username,
                },
                (response) => {}
              );
            }
          }
        }
      }
    }
  }
}
setInterval(() => removeAllVerification(), 500);

chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
  if (request.verified === true) {
    verified_marks[
      request.id
    ].outerHTML = `<svg style="color: #1fb4ff" viewBox="0 0 24 24" role="img" class="r-1cvl2hr r-4qtqp9 r-yyyyoo r-1xvli5t r-f9ja8p r-og9te1 r-bnwqim r-1plcrui r-lrvibr"><g><path d="M22.25 12c0-1.43-.88-2.67-2.19-3.34.46-1.39.2-2.9-.81-3.91s-2.52-1.27-3.91-.81c-.66-1.31-1.91-2.19-3.34-2.19s-2.67.88-3.33 2.19c-1.4-.46-2.91-.2-3.92.81s-1.26 2.52-.8 3.91c-1.31.67-2.2 1.91-2.2 3.34s.89 2.67 2.2 3.34c-.46 1.39-.21 2.9.8 3.91s2.52 1.26 3.91.81c.67 1.31 1.91 2.19 3.34 2.19s2.68-.88 3.34-2.19c1.39.45 2.9.2 3.91-.81s1.27-2.52.81-3.91c1.31-.67 2.19-1.91 2.19-3.34zm-11.71 4.2L6.8 12.46l1.41-1.42 2.26 2.26 4.8-5.23 1.47 1.36-6.2 6.77z"></path></g></svg>`;
  } else {
    verified_marks[request.id].outerHTML =
      "<img style='height:20px' src='https://regtechtimes.com/wp-content/uploads/2021/12/fraud-4567.png'>";
  }
});
