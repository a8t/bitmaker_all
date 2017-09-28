0. Select the element that contains the profile image (hint: look for the class). Change the src attribute so it points to a picture of your choosing instead.

```profile = document.querySelector(".profile-image")```

```profile.src = "https://placebear.com/400/400"```

1. Use the same approach to select the element that contains the photo of the sky and change the src attribute to another picture URL of your choosing.

```sky = document.querySelector("#left-image>img")```

```sky.src = "https://placebear.com/325/225"```

2. Select the heading that says "Panda the Bear" and change it to your own name.

```name = document.querySelector("h1.highlight")```

```name.innerText = "Andy"```

3. Select the heading that says "Employment" and change it to something else. 

```document.querySelector("h1.highlight").innerText = "Andy"```

4. 

```document.querySelector("body").style.backgroundColor = "green"```

5. Change the colour of the body.

```document.querySelectorAll(".highlight").forEach(```

```    (eachHighlight) => (eachHighlight.style.backgroundColor = "blue")```

```)```

6. Change the font family of the h1 to 'monospace'.
```document.querySelector("h1").style.fontFamily = "monospace"```

7. Find a way to select the round icons in the sidebar and then change their colour.

```document.querySelectorAll(".action-icon-bg").forEach(```

```    (eachCircle) => (eachCircle.style.backgroundColor = "brown")```

```)```

8. Scroll down to the contact form. Change the placeholder attribute of the name field to "identify yourself".

```document.getElementById("name").placeholder = "Identify yourself!";```

9. Change the placeholder attribute of the message field to "state your business".

```document.getElementById("message").placeholder = "State your business!";```

10. Give the name field a "value" attribute of "your nemesis".

```document.getElementById("name").value = "Your nemesis";```

11. Change the value attribute of the email field to "koalathebear@gmail.com".

```document.getElementById("email").value = "kaolathebear@gmail.com";```

12. Change the value of the submit button on the contact form to "En garde!".

```document.getElementById("submit").value = "En garde!";```

13. We should stop Koala from sending an email to Panda that they might regret! Find a way to disable the submit button (hint: familiarize yourself with the disabled attribute).

```document.getElementById("submit").disabled = true;```

14. We should help Panda protect their privacy by erasing their personal details from the sidebar.

```document.querySelector(".bio-info").innerHTML = ""```


