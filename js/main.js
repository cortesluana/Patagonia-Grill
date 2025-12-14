import javafx.application.Application;
import javafx.fxml.FXMLLoader;
import javafx.scene.Parent;
import javafx.scene.Scene;
import javafx.stage.Stage;

import java.io.IOException;
import java.util.Objects;

public class Main extends Application {

    private static Scene scene; // Mantenemos una referencia estática a la Scene

    @Override
    public void start(Stage stage) throws IOException {
        // Carga la estructura de la interfaz desde el archivo FXML
        Parent root = FXMLLoader.load(Objects.requireNonNull(getClass().getResource("ToggleDarkLightMode.fxml")));
        
        scene = new Scene(root, 600, 400);

        // Por defecto, carga el tema claro (light-mode)
        scene.getStylesheets().add(Objects.requireNonNull(getClass().getResource("styles.css")).toExternalForm());
        scene.getRoot().getStyleClass().add("light-mode"); 

        stage.setTitle("JavaFX Tema Oscuro/Claro");
        stage.setScene(scene);
        stage.show();
    }

    // Método estático para que el controlador pueda acceder y cambiar la escena
    public static Scene getScene() {
        return scene;
    }

    public static void main(String[] args) {
        launch();
    }
}
