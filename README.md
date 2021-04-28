# Компонент Validator


При вызове метода validate, компонент вызывает данный метод у своих детей (только Validator)

Схематично:
```html
<Validator><!-- 1 -->
	  <SomeComponent>
		    <Validator></Validator> <!-- 2 -->
  	</SomeComponent>
  	<SomeComponent>
  		  <Validator><!-- 3 -->
  		  	  <Validator /><!-- 4 -->
  		  </Validator>
  	</SomeComponent>
  	<Validator></Validator><!-- 5 -->
</Validator>
```
Вызов метода validate у компонента 1 вызвает данный метод у компонентов 2, 3, 5.
Вызов метода у компонента 3 вызвает метод у компонента 4.

Вложенность компонентов неограничена.
